import React from 'react';
import { Text, TextInput, View } from 'react-native';
type InputProps = {
  placeholder: string;
  title: string;
};

export default function Input({ placeholder, title }: InputProps) {
  return (
    <View className={styles.inputContainer}>
      <Text className={styles.title}>{title}</Text>
      <TextInput
        className={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#C8C8C8"
      />
    </View>
  );
}

const styles = {
  inputContainer: `w-full bg-white p-2 rounded-[12]`,
  input: `w-full mt-2`,
  title: 'ml-1 text-lg font-bold text-black ',
  placeholder: `bg-gray200 text-sm`,
};
