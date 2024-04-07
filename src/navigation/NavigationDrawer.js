import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

function NavigationDrawer() {
  return (
    <Drawer.Navigator initialRouterName="Feed">
      <Drawer.Screen name="Home" component={HomeScreen} options={{title: "Welcome Drawer"}} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export {NavigationDrawer} 