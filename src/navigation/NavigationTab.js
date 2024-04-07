import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function NavigationTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{title: "Welcome Tab"}}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  )
}

export default NavigationTab