import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert, Switch, ScrollView} from 'react-native';

export default function Tab() {
    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://10.80.4.55:3000/api/addserver', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to add server');
            }

            Alert.alert('Success', 'Server added successfully');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };


    const handleCheckboxChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Server Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Servername"
                    value={formData.field1}
                    onChangeText={(value) => handleInputChange('field1', value)}
                />
                <Text style={styles.title}>Daten</Text>
                <TextInput
                    style={styles.input}
                    placeholder="IPv4 Adresse"
                    value={formData.field2}
                    onChangeText={(value) => handleInputChange('field2', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Port"
                    value={formData.field3}
                    onChangeText={(value) => handleInputChange('field3', value)}
                />
                <Text style={[styles.title, { marginTop: 20 }]}>Optionale Funktionen</Text>
                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxText}>MongoDB</Text>
                    <Switch
                        value={formData.checkbox1}
                        onValueChange={(value) => handleCheckboxChange('checkbox1', value)}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxText}>Redis</Text>
                    <Switch
                        value={formData.checkbox2}
                        onValueChange={(value) => handleCheckboxChange('checkbox2', value)}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxText}>RabbitMQ</Text>
                    <Switch
                        value={formData.checkbox3}
                        onValueChange={(value) => handleCheckboxChange('checkbox3', value)}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxText}>Git</Text>
                    <Switch
                        value={formData.checkbox4}
                        onValueChange={(value) => handleCheckboxChange('checkbox4', value)}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxText}>RAM und CPU</Text>
                    <Switch
                        value={formData.checkbox5}
                        onValueChange={(value) => handleCheckboxChange('checkbox5', value)}
                    />
                </View>
                <Button title="Server hinzufügen" onPress={handleSubmit} />
            </View>
        </ScrollView>
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    checkboxText: {
        flex: 1,
    },
});
