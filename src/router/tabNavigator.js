import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CART,
  FAVORİTES,
  HOMESCREEN,
  PROFİLE,
  TRENDYOLGO,
} from '../utils/routes';
import HomeScreen from '../screens/home';
import trendyolGo from '../screens/TrendyolGo';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import TabIcon from '../components/router/tabIcon';
import appColors from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            name={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        tabBarActiveTintColor: appColors.PRIMARY,
        tabBarInactiveTintColor: appColors.GRAY,
      })}>
      <Tab.Screen name={HOMESCREEN} component={HomeScreen} />
      <Tab.Screen name={TRENDYOLGO} component={trendyolGo} />
      <Tab.Screen name={FAVORİTES} component={Favorites} />
      <Tab.Screen name={CART} component={Cart} />
      <Tab.Screen name={PROFİLE} component={Profile} />
    </Tab.Navigator>
  );
}
