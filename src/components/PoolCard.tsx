import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';
import COLORS from '../assets/colors';
import TYPOGRAPHY from '../assets/typography';
import HookBadge from './HookBadge';

interface PoolCardProps {
  tokenAIcon: any; // Image source or emoji string
  tokenBIcon: any; // Image source or emoji string
  poolName: string;
  apy: number;
  liquidity: number;
  hasHook?: boolean;
  hookType?: 'KYC' | 'Whitelist' | 'Custom';
  style?: ViewStyle;
  onPress?: () => void;
}

const PoolCard: React.FC<PoolCardProps> = ({
  tokenAIcon,
  tokenBIcon,
  poolName,
  apy,
  liquidity,
  hasHook = false,
  hookType = 'Custom',
  style,
  onPress,
}) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.header}>
        <View style={styles.icons}>
          {typeof tokenAIcon === 'string' ? (
            <Text style={styles.emoji}>{tokenAIcon}</Text>
          ) : (
            <Image source={tokenAIcon} style={styles.icon} />
          )}
          {typeof tokenBIcon === 'string' ? (
            <Text style={styles.emoji}>{tokenBIcon}</Text>
          ) : (
            <Image source={tokenBIcon} style={styles.icon} />
          )}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.poolName}>{poolName}</Text>
          {hasHook && <HookBadge type={hookType} style={{ marginTop: 2 }} />}
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>APY</Text>
          <Text style={[styles.statValue, { color: COLORS.brandGreen }]}>{apy}%</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Liquidity</Text>
          <Text style={styles.statValue}>${(liquidity / 1000).toFixed(1)}K</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.lightBackground,
    borderRadius: 18,
    padding: 18,
    marginVertical: 8,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 4,
  },
  emoji: {
    fontSize: 26,
    marginRight: 4,
  },
  poolName: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.size.lg,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: COLORS.greyMid,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '500',
    fontSize: TYPOGRAPHY.size.sm,
    marginBottom: 2,
  },
  statValue: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.size.md,
  },
});

export default PoolCard; 