import React from 'react'
import { View, TextInput, Button } from 'react-native'

function LoginForm() {
  return (
    <View>
        <TextInput placeholder="Email"></TextInput>
        <TextInput placeholder="Password"></TextInput>
        <Button title="Login" onPress={() => console.log("Enviando formulario de logueo")}></Button>
    </View>
  )
}

export {LoginForm}