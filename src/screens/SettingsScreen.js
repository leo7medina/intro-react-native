import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'


function SettingsScreen(props) {

    const goToPage = (pageName) => {
        props.navigation.navigate(pageName);
    };

  return (
    <SafeAreaView>
    <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Button onPress={() => goToPage("Home")} title="Ir a HOME" />
    </SafeAreaView>
  )
}

export {SettingsScreen}