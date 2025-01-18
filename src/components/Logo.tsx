import { View, Image } from 'react-native';

export default function Logo() {
  return (
    <View className="logo">
      <Image className={styles.logo} source={require('../../assets/logo.png')} resizeMode="cover" />
    </View>
  );
}

const styles = {
  logo: `h-150 w-150`,
};
