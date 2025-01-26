import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomeAdmin() {
  return (
    <View>
      <Text>HomeAdmin</Text>
      <Link href="/(admin)/profileAdmin/page" style={styles.button}>
        <Text>Ir para Profilclient e Admin</Text>
      </Link>
      <Link href="/(admin)/userCreate/page" style={styles.button}>
        <Text>Ir para Criar Usuario</Text>
      </Link>
    </View>
  );
}

const styles = {
  button: {
    margin: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },
};
