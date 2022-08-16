import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import BotonOne from "../components/BotonOne";
import { useNavigation } from '@react-navigation/native';
import { getReciepesInformation } from '../services/platoService';
import CardsComidas from '../components/CardsComidas'
import {enterlogin} from '../services/loginService';
import Girador from '../components/girador';



const InformacionPlatos =({navigation, route})=>{
    const id = route.params.idPlato
    const image= route.params.foodImage
    const title=route.params.foodTitle



    const [informacion, setInformacion] = useState([])

      const [loadState, setLoaded] = useState(false)
 
  const masInformacion = async (e) => {
      await getReciepesInformation(id).then((response) => {
        console.log("hola",response)
        setLoaded(true)
        setInformacion(response)
        console.log(informacion, "goda")
      })
      .catch(() => {
        console.log("noooo")
        
        Alert.alert("Datos incorrectos")
      });
    }

    useEffect(() => {
        (async () => {
          await masInformacion()
        })()
      }, [])

  return (


          <View>

             {
            loadState
            &&<><Text>titulo de la comida; {title}</Text>
          
            <Image 
                    style={{ width: 150, height: 150, marginTop:30, borderRadius: 20 }}
                    source={{uri: image}}
                />
                <Text>Vegano: {informacion.vegan ? 'Si' : 'No'}</Text>
                <Text>Precio: ${informacion.pricePerServing}</Text>
                <Text>Tiempo de preparacion: {informacion.readyInMinutes} minutos</Text>
          </>
             }


            
         
        
        
                  
         </View>
     
        
       
        
  );
}

export default InformacionPlatos

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
