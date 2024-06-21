import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, SafeAreaView} from 'react-native';
import {router} from "expo-router";

const serverIP = "10.80.4.55:3000"

export default function App() {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });

    const [registerFormData, setRegisterFormData] = useState({
        email: '',
        password1: '',
        password2: '',
    });

    const handleEmailFormChange = (name, value) => {
        setLoginFormData({
            ...loginFormData,
            [name]: value,
        });
    };

    const handlePasswordFormChange = (name, value) => {
        setRegisterFormData({
            ...registerFormData,
            [name]: value,
        });
    };

    const handleEmailFormSubmit = async () => {
        try {
            const response = await fetch(`http://${serverIP}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginFormData)
            });

            if (response.ok) {
                const user = await response.json();
                Alert.alert('Login erfolgreich', JSON.stringify(user));
                router.replace('(tabs)');
            } else {
                const error = await response.text();
                Alert.alert('Login fehlgeschlagen', error);
            }
        } catch (error) {
            Alert.alert('Fehler', error.message);
        }
    };

    const handlePasswordFormSubmit = async () => {
        try {
            const response = await fetch(`http://${serverIP}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerFormData)
            });

            if (response.ok) {
                const newUser = await response.json();
                Alert.alert('Registrierung erfolgreich', JSON.stringify(newUser));
            } else {
                const error = await response.text();
                Alert.alert('Registrierung fehlgeschlagen', error);
            }
        } catch (error) {
            Alert.alert('Fehler', error.message);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.login_container}>
                        <Text style={styles.title}>Login</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={loginFormData.email}
                            onChangeText={(value) => handleEmailFormChange('email', value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Passwort"
                            value={loginFormData.password}
                            onChangeText={(value) => handleEmailFormChange('password', value)}
                            secureTextEntry
                        />
                        <Button title="Einloggen" onPress={handleEmailFormSubmit} />
                    </View>

                    <Text style={styles.title}>Registrieren</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={registerFormData.email}
                        onChangeText={(value) => handlePasswordFormChange('email', value)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Passwort"
                        value={registerFormData.password1}
                        onChangeText={(value) => handlePasswordFormChange('password1', value)}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Passwort bestätigen"
                        value={registerFormData.password2}
                        onChangeText={(value) => handlePasswordFormChange('password2', value)}
                        secureTextEntry
                    />
                    <Button title="Registrieren" onPress={handlePasswordFormSubmit} />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        height: 60,
        backgroundColor: "#FFFFFF",
        marginBottom: 20,
        paddingLeft: 8,
        width: 350,
        borderRadius: 10,
    },

});
