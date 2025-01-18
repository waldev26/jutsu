import '../../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(admin)/homeAdmin/page" options={{ headerShown: true }} />
      <Stack.Screen name="(client)/home/page" options={{ headerShown: true }} />
    </Stack>
  );
}
