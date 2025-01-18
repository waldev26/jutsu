import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { Input, Logo } from '~/components';
import { Button } from '~/components/Button';

export default function Home() {
  const homeAdmin = () => {
    router.replace('/(admin)/homeAdmin/page');
  };
  return (
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
          <Input title="Usuário:" placeholder="Nome" />
          <Input title="Senha:" placeholder="******" />
        </View>
        <View className="mt-10">
          <Button
            title="Entrar"
            className="bg-black100 items-center rounded-[20px] p-4 shadow-md"
            onPress={homeAdmin}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: 'flex-1 bg-black',
  block: 'bg-black p-4 h-[300] justify-center items-center',
  blockRounded: 'bg-gray-100 h-full -mt-5  rounded-l-[80] p-8 text-black',
  logo: `h-full w-full`,
  title: 'text-3xl font-bold text-black',
  groupInput: 'mt-10 gap-4',
};
