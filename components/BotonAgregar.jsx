import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const BotonAgregar = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={style.button}
            onPress={onPress}
        >
            <Text style={style.buttonText}>
                {text}
            </Text>
        
        </TouchableOpacity>
    
    )
}

export default BotonAgregar


const style = StyleSheet.create({

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },
    button: {
        backgroundColor: "green",
        borderWidth:2,
        borderColor: 'lightblue',
        borderRadius: 15,
        padding: 15,
        marginTop:'9%',
        marginBottom:'30%',
        width: '80%'
    },

});





