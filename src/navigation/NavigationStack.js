import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
//const stack = createStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator initialRouterName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Welcome"}}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
    </Stack.Navigator>
  )
}

export {NavigationStack}