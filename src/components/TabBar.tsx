import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../assets/colors';
import TYPOGRAPHY from '../assets/typography';
import { Ionicons } from '@expo/vector-icons';

interface TabBarProps {
  tabs: Array<{
    key: string;
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
  }>;
  activeKey: string;
  onTabPress: (key: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, activeKey, onTabPress }) => {
  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const isActive = tab.key === activeKey;
        return (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => onTabPress(tab.key)}
            activeOpacity={0.85}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={isActive ? COLORS.brandPurple : COLORS.greyMid}
              style={styles.icon}
            />
            <Text style={[styles.label, isActive && styles.activeLabel]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderDarkColor,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 18,
    marginHorizontal: 6,
    flexDirection: 'column',
  },
  activeTab: {
    backgroundColor: COLORS.lighterBackground,
    shadowColor: COLORS.brandPurple,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  },
  icon: {
    marginBottom: 2,
  },
  label: {
    color: COLORS.greyMid,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontWeight: '500',
    fontSize: TYPOGRAPHY.size.sm,
    marginTop: 2,
  },
  activeLabel: {
    color: COLORS.brandPurple,
    fontWeight: '700',
  },
});

export default TabBar; 