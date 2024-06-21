import React, { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import Server from "../../components/Server";

export default function Tab() {
    const [servers, setServers] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchServers = async () => {
        try {
            const response = await fetch('http://10.80.4.55:3000/api/servers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch servers');
            }

            const data = await response.json();

            // Checkt den Status für jeden einzelnen Server
            const updatedServers = await Promise.all(data.map(async (server) => {
                const status = await getServerStatus(server.ipv4, server.port);
                if (status && status.status !== 'error' && status.status !== 'timeout') {
                    return { ...server, serverName: server.serverName + ' Online' };
                } else {
                    return { ...server, serverName: server.serverName + ' Offline' };
                }
            }));

            setServers(updatedServers);
        } catch (error) {
            console.error('Error fetching servers:', error);
        }
    };

    useEffect(() => {
        fetchServers();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchServers().finally(() => {
            setRefreshing(false);
        });
    }, []);

    const getServerStatus = async (host, port) => {
        try {
            const response = await fetch(`http://10.80.4.55:3000/getServerStatus?host=${host}&port=${port}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return { status: 'error', message: error.message };
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {servers.map((server, index) => (
                    <Server
                        key={index}
                        name={server.serverName}
                        ip={server.ipv4}
                        port={server.port}
                        getStatus={() => getServerStatus(server.ipv4, server.port)}  // Pass a function returning promise as prop
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
