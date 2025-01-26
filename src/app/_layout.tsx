import '../../global.css';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

import { AuthProvider, useAuth } from '~/contexts/AuthContext';
import { supabase } from '~/utils/supabase';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

function Layout() {
  const { setAuth } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      // console.log(session?.user);

      setAuth(session?.user ?? null);
    });
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(admin)/homeAdmin/page" />
      <Stack.Screen name="(admin)/profileAdmin/page" />
      <Stack.Screen name="(admin)/userCreate/page" />
    </Stack>
  );
}
