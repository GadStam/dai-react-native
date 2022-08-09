import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput, Alert, FlatList} from 'react-native';
import Girador from '../components/girador'
import { useState } from 'react';
import BotonOne from "../components/BotonOne";
import { useNavigation } from '@react-navigation/native';
import {searchRecipe} from '../services/platoService'

const Home =({navigation})=>{
    const [plato, setPlato] = useState("");

    const [platoBuscar, setPlatoBuscar] = useState({
        lista: []
    })
        
    const [loadState, setLoaded] = useState(false)
    
      const onLogInPress = async (e) => {
    
        if (!plato){  
          Alert.alert("Por favor ingresa un plato")
          console.log("no escribiste")
          console.log(plato)
        } else {
          await searchRecipe(plato).then((response) => {
            console.log("entro")
            setLoaded(false)
            setPlatoBuscar({lista: response})

            console.log("hola,", response)
            Alert.alert("correctooooo")
          })
          .catch(() => {
            console.log("noooo")
            setLoaded(false)
            Alert.alert("Datos incorrectos")
          });
        }
      }
    
    
  return (

      <View>
      <Text style={styles.titulo}>HOME</Text>
      <TextInput
            style={styles.textInput}
            
            placeholder="Buscador"
            name="Buscador"
            value={plato}
            onChangeText={text => setPlato({...setPlato, plato: text}) }
          
          />


          <BotonOne
            text="Iniciar Sesion"
            title="Iniciar Sesion"
            onPress={onLogInPress}
            />
        {
            loadState
            ? <FlatList
            keyExtractor={(item) => item.title}
            data={platoBuscar.lista}
            renderItem={({item}) =>(
            <Text>{item.title}</Text>
         )}
        />
        : <Text></Text>
        }
     </View>
     

    
  );
}

export default Home

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop:200
},
  image: {
    height:'100%',
    alignItems: 'center',
  },
  titulo: {
    position: 'absolute',
    top: '45%',
    color: 'blue',
    fontSize: 30,
    
  },
  textInput:{
    marginTop: 200,
    backgroundColor:'white'
  }
});