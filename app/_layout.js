import { Stack } from 'expo-router/stack';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="serverInformation" options={{
                headerShown: true,
                headerTitle: 'Server Informationen',
                headerBackTitleVisible: false,
            }} />
        </Stack>
    );
}
