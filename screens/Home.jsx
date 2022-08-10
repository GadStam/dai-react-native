import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput, Alert, FlatList} from 'react-native';
import Girador from '../components/girador'
import { useState } from 'react';
import BotonOne from "../components/BotonOne";
import { useNavigation } from '@react-navigation/native';
import {searchRecipe} from '../services/platoService'
import CardsComidas from '../components/CardsComidas';

const Home =({navigation})=>{
    const [plato, setPlato] = useState({
      platoComida:""
    });

    const [platoBuscar, setPlatoBuscar] = useState({
        lista: []
    })
        
    const [loadState, setLoaded] = useState(false)
    
      const onLogInPress = async (e) => {


        let largo = plato.platoComida.length
        


        if (!plato.platoComida || largo < 3){  
          Alert.alert("Por favor ingresa un plato")
          console.log("no escribiste")
          
        } else {
          
          await searchRecipe(plato.platoComida).then((response) => {
            console.log("entro")
            console.log(response)
            setLoaded(true)
            setPlatoBuscar({lista: response})
            console.log("tus comidas", platoBuscar.lista )
           

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
            value={plato.platoComida}
            onChangeText={text => setPlato({...plato, platoComida: text}) }
          
          />


          <BotonOne
            text="Iniciar Sesion"
            title="Iniciar Sesion"
            onPress={onLogInPress}
            />


        {
            loadState
            &&<FlatList
            keyExtractor={(item) => item.title}
            data={platoBuscar.lista}
            renderItem={({item}) =>(

            <Text>{item.title}, {item.id}, {item.image}</Text>
          
            
         )}
        />
        
            }

            <CardsComidas/>
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