import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Server from "../../components/Server";

export default function Tab() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Server />
                <Server />
                <Server />
                <Server />
                <Server />
                <Server />
                <Server />
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
``
