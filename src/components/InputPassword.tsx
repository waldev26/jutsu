import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type InputProps = {
  placeholder: string;
  title: string;
  secure?: boolean;
  see?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function InputPassword({
  placeholder,
  title,
  value,
  onChange,
  secure = false,
  see,
  error,
}: InputProps) {
  const [eye, setEye] = React.useState(see);
  const [securePassword, setSecurePassword] = React.useState(secure);

  const handleEye = () => {
    setEye(!eye);
    setSecurePassword(!securePassword);
  };

  return (
    <View className={styles.inputContainer}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.contentInput}>
        <TextInput
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          placeholderTextColor="#C8C8C8"
          secureTextEntry={securePassword}
          autoCapitalize={'none'}
        />
        {eye ? (
          <Pressable onPress={handleEye}>
            <Ionicons name="eye" size={32} color="black" />
          </Pressable>
        ) : (
          <Pressable onPress={handleEye}>
            <Ionicons name="eye-off" size={32} color="black" />
          </Pressable>
        )}
      </View>

      {error && <Text className={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = {
  inputContainer: `w-full bg-white p-2 rounded-[12] border-gray-200 border mt-2`,
  contentInput: `flex-row items-center justify-between `,
  input: ` mt-2 text-xl`,
  title: 'ml-1 text-lg font-bold text-black ',
  placeholder: `bg-gray200 text-sm`,
  error: 'text-red-500 text-sm mt-1',
};
