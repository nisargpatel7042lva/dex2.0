import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import COLORS from '../assets/colors';

const LoadingSkeleton: React.FC<{ height?: number; width?: number; style?: any }> = ({ height = 20, width = '100%', style }) => {
  return (
    <View style={[styles.skeleton, { height, width }, style]} />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: COLORS.greyBorderdark,
    borderRadius: 8,
    marginVertical: 6,
    opacity: 0.5,
  },
});

export default LoadingSkeleton; 