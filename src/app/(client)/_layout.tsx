import '../../../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(client)/home/page" />
      <Stack.Screen name="(client)/profile/page" />
    </Stack>
  );
}
