import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { Input, Logo } from '~/components';
import { Button } from '~/components/Button';
import InputPassword from '~/components/InputPassword';
import { supabase } from '~/utils/supabase';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [eye, setEye] = useState(false);

  const handleSignIn = async () => {
    setStatus('admin');
    setLoading(true);
    if (!email || !password) {
      setError('Todos os campos precisam ser preenchidos!');
      setLoading(false);
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setError(error ? 'Email e/ou senha incorretos!' : '');
      setLoading(false);

      if (status === 'admin') {
        router.replace('/(admin)/homeAdmin/page');
      } else if (status === 'client') {
        router.replace('/home/page');
      }
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className={styles.safeArea}>
      <ScrollView className={styles.container}>
        <View className={styles.block}>
          <Text className="text-2xl font-bold text-white">
            <Logo />
          </Text>
        </View>
        <View className={styles.blockRounded}>
          <View className="items-center justify-center">
            <Text className={styles.title}>Entrar</Text>
          </View>
          <View className={styles.groupInput}>
            <Input title="Usuário:" placeholder="Nome" value={email} onChange={setEmail} />
            <InputPassword
              title="Senha:"
              placeholder="******"
              secure
              value={password}
              onChange={setPassword}
              error={error}
              see={eye}
            />
          </View>
          <View className="mt-10">
            <Button
              title="Entrar"
              className="bg-black100 "
              onPress={handleSignIn}
              loading={loading}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  safeArea: 'flex-1 bg-black',
  container: 'flex-1 ',
  block: 'bg-black p-4 h-[300] justify-center items-center',
  blockRounded: 'bg-gray-100 h-full -mt-5  rounded-l-[80] p-8 text-black',
  logo: `h-full w-full`,
  title: 'text-3xl font-bold text-black',
  groupInput: 'mt-10 gap-4',
};
