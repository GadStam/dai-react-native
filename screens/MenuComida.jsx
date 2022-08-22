import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput, Alert, FlatList} from 'react-native';
import Girador from '../components/girador'
import { useState } from 'react';
import BotonOne from "../components/BotonOne";
import { useNavigation } from '@react-navigation/native';
import {searchRecipe} from '../services/platoService'
import CardsComidas from '../components/CardsComidas';
import {useContextState} from '../contextState'

const MenuComida =({navigation})=>{
    
  const {contextState, setContextState} = useContextState();
    

  return (


          <View>
       
        {
                contextState.menu.listaPlatos.length == 0
                ?
                <Text>No hay platos en el menu</Text>
                :
                <>
                <Text>Menu</Text>
                <Text>Precio promedio: ${contextState.menu.precio}</Text>
                <Text>HealthScore promedio: {contextState.menu.promedioHealthScore} puntos</Text>
                <Text>Cantidad de platos veganos: {contextState.menu.platoVeganos}</Text>
                <Text>Cantidad de platos no veganos: {contextState.menu.platoNoVeganos}</Text>
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