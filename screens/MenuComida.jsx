import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput, Alert, FlatList} from 'react-native';
import Girador from '../components/girador'
import { useState } from 'react';
import BotonOne from "../components/BotonOne";
import BotonEliminar from "../components/BotonEliminar"
import { useNavigation } from '@react-navigation/native';
import {searchRecipe} from '../services/platoService'
import CardsComidas from '../components/CardsComidas';
import {useContextState} from '../contextState'
import { useEffect } from 'react';

const MenuComida =({navigation})=>{
    
  const {contextState, setContextState} = useContextState();
    
 /* useEffect(() => {
    (async () => {
      console.log(contextState.menu)
      if(contextState.token===""){
        navigation.navigate("/logIn")
      }
    })()
  }, [])*/

  return (


          <View style={styles.vista}>
            <BotonOne 
              text="Volver a Home"
              title="Home"
              onPress= {()=>{navigation.navigate("Home")}}
              />         
    
        {
                contextState.menu.listaPlatos.length == 0
                ? 
                <>
                <Text>No hay platos en el menu</Text>

                </>
                :
                <>
                <Text style={styles.titulo}>Menu</Text>
                <Text style={styles.valor}>Precio: ${contextState.menu.precioMenu}</Text>
                <Text style={styles.valor}>HealthScore promedio: {contextState.menu.promedioHealthScore} puntos</Text>
                <Text style={styles.valor}>Cantidad de platos veganos: {contextState.menu.platoVeganos}</Text>
                <Text style={styles.valor}>Cantidad de platos no veganos: {contextState.menu.platoNoVeganos}</Text>
                </>

            }
            <FlatList
            keyExtractor={(item) => item.title}
            data={contextState.menu.listaPlatos}
            renderItem={({item}) =>(

          <CardsComidas title = {item.title}
          image = {item.image}
          id = {item.id}

          />
          
          
        )}
        />
    
            
        
        
        
                  
        </View>
    
        
    
        
  );
}

export default MenuComida


const styles = StyleSheet.create({

  vista:{
    backgroundColor: '#d4dbb2',
    height:"100%",
    alignItems: 'center',
  },
  titulo: {
    color: 'blue',
    fontSize: 30,
  },
  valor: {
    color: 'green',
    fontSize: 20,
  },
  image: {
    height:'100%',
    alignItems: 'center',
  },
});