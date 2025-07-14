import React from 'react';
import { TextInput, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import COLORS from '../assets/colors';
import TYPOGRAPHY from '../assets/typography';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  secureTextEntry?: boolean;
  editable?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  style,
  inputStyle,
  keyboardType = 'default',
  secureTextEntry = false,
  editable = true,
}) => {
  return (
    <TextInput
      style={[styles.input, inputStyle, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={COLORS.greyMid}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      editable={editable}
      selectionColor={COLORS.brandPurple}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.lighterBackground,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: COLORS.brandPurple,
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '500',
    fontSize: TYPOGRAPHY.size.lg,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginVertical: 8,
  },
});

export default Input; 