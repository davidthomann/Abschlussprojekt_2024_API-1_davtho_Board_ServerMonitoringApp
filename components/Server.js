import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {useRouter} from "expo-router";

const Server = () => {
    const router = useRouter();

    return (
        <TouchableWithoutFeedback onPress={() => router.navigate({pathname: "serverInformation"})}>
            <View style={styles.server}>
                <Text style={styles.server_name}>Server Name</Text>
                <View style={styles.status}>
                    <View style={styles.status_point}></View>
                    <Text style={styles.status_text}>Online</Text>
                </View>
                <Button style={styles.edit_button} title={"Bearbeiten"}></Button>
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




