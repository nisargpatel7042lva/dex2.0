import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import COLORS from '../assets/colors';
import TYPOGRAPHY from '../assets/typography';
import { Ionicons } from '@expo/vector-icons';

interface HookBadgeProps {
  type: 'KYC' | 'Whitelist' | 'Custom';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const getBadgeColor = (type: string) => {
  if (type === 'KYC') return COLORS.brandGreen;
  if (type === 'Whitelist') return COLORS.brandPurple;
  return COLORS.brandPrimary;
};

const getIcon = (type: string) => {
  if (type === 'KYC') return 'shield-checkmark';
  if (type === 'Whitelist') return 'checkmark-done';
  return 'alert-circle';
};

const HookBadge: React.FC<HookBadgeProps> = ({ type, style, textStyle }) => {
  return (
    <View style={[styles.badge, { backgroundColor: getBadgeColor(type) }, style]}>
      <Ionicons name={getIcon(type)} size={14} color={COLORS.white} style={{ marginRight: 4 }} />
      <Text style={[styles.text, textStyle]}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 4,
    marginBottom: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.10,
    shadowRadius: 3,
    elevation: 2,
  },
  text: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '600',
    fontSize: TYPOGRAPHY.size.sm,
    letterSpacing: 0.2,
  },
});

export default HookBadge; 