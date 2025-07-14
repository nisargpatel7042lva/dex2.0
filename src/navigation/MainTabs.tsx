import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TabBar from '../components/TabBar';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import SwapScreen from '../screens/SwapScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const TABS = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'portfolio', label: 'Portfolio', icon: 'pie-chart' },
  { key: 'swap', label: 'Swap', icon: 'swap-horizontal' },
  { key: 'analytics', label: 'Analytics', icon: 'bar-chart' },
  { key: 'profile', label: 'Profile', icon: 'person-circle' },
];

const MainTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'portfolio':
        return <PortfolioScreen />;
      case 'swap':
        return <SwapScreen />;
      case 'analytics':
        return <AnalyticsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>{renderScreen()}</View>
      <TabBar tabs={TABS} activeKey={activeTab} onTabPress={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1B',
  },
  screen: {
    flex: 1,
  },
});

export default MainTabs; 