import { forwardRef } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

type ButtonProps = {
  title: string;
  loading?: boolean;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(
  ({ title, loading, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`${styles.button} ${touchableProps.className}`}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text className={styles.buttonText}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center rounded-[20px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
};
