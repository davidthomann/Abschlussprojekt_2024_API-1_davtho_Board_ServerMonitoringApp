import React from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';

const Server = ({ name, ip, port }) => {
    const router = useRouter();

    return (
        <TouchableWithoutFeedback onPress={() => router.navigate({ pathname: "serverInformation" })}>
            <View style={styles.server}>
                <Text style={styles.server_name}>{name}</Text>
                <Text style={styles.ip}>{ip}:{port}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    server: {
        flex: 1,
        width: 350,
        height: 145,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    server_name: {
        fontSize: 18,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    ip: {
        fontSize: 16,
        color: "#888",
    },
    status: {
        position: 'absolute',
        right: 15,
        top: 30,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    status_point: {
        width: 10,
        height: 10,
        backgroundColor: "#62C370",
        borderRadius: 200,
    },
    status_text: {
        color: "#62C370",
        marginLeft: 4,
    },
    edit_button: {
        position: "absolute",
        marginLeft: 100,
    },
});

export default Server;
