import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import logIn from '../screens/logIn'
import Home from '../screens/Home'
import InformacionPlatos from '../screens/InformacionPlatos'
const Stack = createNativeStackNavigator()

const MainStack =()=>{
  
return(
<NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }
    }>
        
        <Stack.Screen 
            name='Home'>
                {(props) => <Home {...props}
            />}
        </Stack.Screen>

        <Stack.Screen 
            name='InformacionPlatos'>
                {(props) => <InformacionPlatos {...props}
            />}
        </Stack.Screen>

        
         
    </Stack.Navigator>
</NavigationContainer>

)}

export default MainStack

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'green',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingHorizontal:10
    },
    buttonText:{
    color:'white'
    }
})