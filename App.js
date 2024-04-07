import "react-native-gesture-handler";
import React from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from "./src/navigation/NavigationDrawer";
//import { NavigationStack } from './src/navigation/NavigationStack';
// import NavigationTab from './src/navigation/NavigationTab';
//import {NavigationDrawer} from "./src/navigation/NavigationDrawer";
//import { Saludar } from './src/components/Saludar';

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack/> */}
      {/* <NavigationTab/> */}
      {/* <NavigationDrawer/> */}
      <NavigationDrawer />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app Leo!</Text>

        <Saludar/>

        <Saludar firstname="Leonardooo"/>
        <Saludar firstname="Joselyn"/>
        <StatusBar style="auto" />
      </View> */