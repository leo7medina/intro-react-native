import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types';

function Saludar(props) {
    /**
     * Deafult props
     * manera no eficiente de mantener.
     * const {firstname = "Jacinto"} = props;
     */
    //const {firstname = "Jacinto"} = props;
  return (
    <Text>
        Hola {props.firstname}
    </Text>
  )
}



export {Saludar} 

//Manera eficinete de utilizar los defaultProps
Saludar.defaultProps = {
    firstname: "Leonardito"
}