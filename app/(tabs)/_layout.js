import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Meine Server',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="addserver"
                options={{
                    title: 'Server hinzufügen',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
                }}

            />
        </Tabs>
    );
}
