import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle, TextStyle } from 'react-native';
import COLORS from '../assets/colors';
import TYPOGRAPHY from '../assets/typography';

interface TokenCardProps {
  icon: any; // Image source or emoji string
  name: string;
  symbol: string;
  price: number;
  change: number;
  amount: number;
  style?: ViewStyle;
  onPress?: () => void;
}

const TokenCard: React.FC<TokenCardProps> = ({ icon, name, symbol, price, change, amount, style, onPress }) => {
  const isPositive = change >= 0;
  return (
    <View style={[styles.card, style]}>
      <View style={styles.left}>
        {typeof icon === 'string' ? (
          <Text style={styles.emoji}>{icon}</Text>
        ) : (
          <Image source={icon} style={styles.icon} />
        )}
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Text style={[styles.change, { color: isPositive ? COLORS.brandGreen : COLORS.errorRed }]}>
          {isPositive ? '+' : ''}{change.toFixed(2)}%
        </Text>
        <Text style={styles.amount}>{amount} {symbol}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightBackground,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginVertical: 6,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  emoji: {
    fontSize: 32,
    marginRight: 12,
  },
  name: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.size.lg,
  },
  symbol: {
    color: COLORS.greyMid,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '500',
    fontSize: TYPOGRAPHY.size.sm,
  },
  right: {
    alignItems: 'flex-end',
  },
  price: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.size.lg,
  },
  change: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '600',
    fontSize: TYPOGRAPHY.size.sm,
    marginTop: 2,
  },
  amount: {
    color: COLORS.greyMid,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '500',
    fontSize: TYPOGRAPHY.size.sm,
    marginTop: 2,
  },
});

export default TokenCard; 