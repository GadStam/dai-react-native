import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import BotonOne from "../components/BotonOne";
import { useNavigation } from '@react-navigation/native';
import {useContextState, ActionTypes} from '../contextState'
import {enterlogin} from '../services/loginService';
import Girador from '../components/girador';

const LogIn =({navigation})=>{
  const {contextState, setContextState} = useContextState()
  const [userState, setUserState] = useState({
    email: '',
    password: '',
  });

  const [loaded, setLoaded] = useState(false)
  

  const onLogInPress = async (e) => {
    
    if (!userState.email|| !userState.password){
      
      Alert.alert("Por favor ingresar todos los datos")
    } else {
      setLoaded(true)
      await enterlogin(userState).then((response) => {
        
        console.log("hola", response)
        setContextState({
          type: ActionTypes.setToken,
          value: response
      })

        setLoaded(false)
        console.log("correctooooo")
        console.log(contextState.token)
        navigation.navigate("Home")

      })
      .catch(() => {
        setLoaded(false)
        Alert.alert("Datos incorrectos")
      });
    }
  }


 

  return (


          <View style={styles.vista}>
            {loaded && <Girador/>}
  
        <Text style={styles.titulo}>Inicio de sesión</Text>
        
        <TextInput
            style={styles.textInput}
            
            placeholder="Ingrese su Email"
            name="Email"
            value={userState.email}
            onChangeText={text => setUserState({...userState, email: text}) }
          
          />
          
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su Password"
            name="Password"
            value={userState.password}
            secureTextEntry={true}
            onChangeText={text => setUserState({...userState, password: text})}
          />   
          
          <BotonOne
            text="Log In"
            title="Iniciar S
            esion"
            onPress={onLogInPress}
            />
            
 
 </View>
     
        
       
        
  );
}

export default LogIn

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop: 200,
  },
  vista: {
    height: "100%",
    alignItems: 'center',
    backgroundColor: '#d4dbb2',
    
    

  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: '9dcdee',
    fontSize:25,
    
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
    color: '9dcdee',
    textDecorationLine:'underline'
  },
  flecha:{
    position: 'absolute',
    top:'7.3%',
    left:'10%',
    color:"9dcdee"
  }

});
