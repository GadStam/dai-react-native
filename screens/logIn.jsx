import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import BotonOne from "../components/BotonOne";
import { useNavigation } from '@react-navigation/native';

import {enterlogin} from '../services/loginService';

const logIn =({navigation})=>{
 
  const [userState, setUserState] = useState({
    usuario: '',
    password: '',
  });

  const onLogInPress = async (e) => {
    
    if (!userState.usuario|| !userState.password){
      
      Alert.alert("Por favor ingresar todos los datos")
    } else {
      
      await enterlogin(userState).then(() => {
        Alert.alert("correctooooo")
        
      })
      .catch(() => {
        
        Alert.alert("Datos incorrectos")
      });
    }
  }

  return (

          <View style={styles.vista}>
  
        <Text style={styles.titulo}>Inicio de sesión</Text>
        
        <TextInput
            style={styles.textInput}
            
            placeholder="Ingrese su usuario"
            name="usuario"
            value={userState.usuario}
            onChangeText={text => setUserState({...userState, usuario: text}) }
          
          />
          
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su Contraseña"
            name="contrasena"
            value={userState.password}
            secureTextEntry={true}
            onChangeText={text => setUserState({...userState, password: text})}
          />   
          
          <BotonOne
            text="Iniciar Sesion"
            title="Iniciar Sesion"
            onPress={onLogInPress}
            />
            
 
 </View>
     
        
       
        
  );
}

export default logIn

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop: 200,
  },
  vista: {
    height: 900,
    alignItems: 'center',
    backgroundColor: 'gray',
    

  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'blue',
    fontSize:25,
    fontFamily: 'Kanit-Regular'
  },
  texto:{
    marginTop:'-25%',
    color: 'white'
  },
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: -5
  },
  atras:{
    position: 'absolute',
    top:'7%',
    left:'15%',
    color: 'blue',
    textDecorationLine:'underline'
  },
  flecha:{
    position: 'absolute',
    top:'7.3%',
    left:'10%',
    color:"blue"
  }
});
