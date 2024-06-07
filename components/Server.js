import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {useRouter} from "expo-router";

const Server = () => {
    const router = useRouter();

    return (
        <TouchableWithoutFeedback onPress={() => router.navigate({pathname: "serverInformation"})}>
            <View style={styles.server}>
                <Text style={styles.server_name}>Server Name</Text>
                <View style={styles.informationen}>
                    <Text style={styles.information_text}>SSL Zertifikat: true</Text>
                    <Text style={styles.information_text}>DNS: 127.0.0.1</Text>
                    <Text style={styles.information_text}>Code: 200</Text>
                    <Text style={styles.information_text}>Status: Online</Text>
                </View>
                <View style={styles.status}>
                    <View style={styles.status_point}></View>
                    <Text style={styles.status_text}>Online</Text>
                </View>
                <TouchableOpacity style={styles.edit_button}>
                    <Text style={styles.edit_button_text}>Edit</Text>
                </TouchableOpacity>
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
        marginTop: 20,
        marginRight: 200
    },
    information_text: {
        marginTop: 2,
        textAlign: 'left',
    },
    informationen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 20,
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
        backgroundColor: "#007AFF",
        width: 70,
        height: 30,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        right: 15,
        bottom: 10
    },
    edit_button_text: {
        color: "#FFFFFF",
        fontSize: 16
    }

});

export default Server;




