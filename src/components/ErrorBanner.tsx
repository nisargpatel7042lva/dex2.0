import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import COLORS from '../assets/colors';
import TYPOGRAPHY from '../assets/typography';

interface ErrorBannerProps {
  message: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message, style, textStyle }) => {
  return (
    <View style={[styles.banner, style]}>
      <Text style={[styles.text, textStyle]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: COLORS.errorRed,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '600',
    fontSize: TYPOGRAPHY.size.md,
    textAlign: 'center',
  },
});

export default ErrorBanner; 