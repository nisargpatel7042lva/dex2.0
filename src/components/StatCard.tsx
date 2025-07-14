import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import COLORS from '../assets/colors';
import TYPOGRAPHY from '../assets/typography';

interface StatCardProps {
  label: string;
  value: string | number;
  style?: ViewStyle;
  valueStyle?: TextStyle;
  labelStyle?: TextStyle;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, style, valueStyle, labelStyle }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.lighterBackground,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    margin: 6,
    minWidth: 120,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 3,
  },
  value: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.size.xxl,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  label: {
    color: COLORS.greyMid,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '500',
    fontSize: TYPOGRAPHY.size.md,
    letterSpacing: 0.2,
  },
});

export default StatCard; 