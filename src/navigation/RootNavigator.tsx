import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import MainTabs from './MainTabs';
import TokenDetailScreen from '../screens/TokenDetailScreen';
import AddLiquidityScreen from '../screens/AddLiquidityScreen';
import AllPoolsScreen from '../screens/AllPoolsScreen';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="TokenDetail" component={TokenDetailScreen} />
        <Stack.Screen name="AddLiquidity" component={AddLiquidityScreen} />
        <Stack.Screen name="AllPools" component={AllPoolsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator; 