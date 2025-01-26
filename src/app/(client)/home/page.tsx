import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Home cliente</Text>
      <Link href="/(client)/profile/page" style={styles.button}>
        <Text>Ir para Profile</Text>
      </Link>
    </View>
  );
}

const styles = {
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },
};
