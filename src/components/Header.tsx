import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ViewStyle } from 'react-native';
import COLORS from '../assets/colors';
import TYPOGRAPHY from '../assets/typography';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightPress?: () => void;
  style?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({ title, rightIcon, onRightPress, style }) => {
  return (
    <View style={[styles.header, style]}>
      {/* App logo (replace with your logo if available) */}
      <View style={styles.logoCircle}>
        <Ionicons name="planet" size={24} color={COLORS.white} />
      </View>
      <Text style={styles.title}>{title}</Text>
      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={styles.rightIcon}>
          <Ionicons name={rightIcon} size={24} color={COLORS.brandPurple} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 32 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 10,
  },
  logoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.lighterBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  title: {
    flex: 1,
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.size.xl,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  rightIcon: {
    marginLeft: 8,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header; 