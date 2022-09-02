import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Alert, Text} from 'react-native';
import Boton from './BotonOne'
import BotonEliminar from './BotonEliminar';
import {getReciepesInformation} from '../services/platoService'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {ActionTypes, useContextState, modificarEliminar} from '../contextState'



const CardsComidas = (props) => {
  const {contextState, setContextState} = useContextState()
  console.log(props.id)
  const existen = contextState.menu.listaPlatos.find((element)=>element.id==props.id)
  console.log("hoola",existen)
  const navigation = useNavigation();
    const navegarInfo = async (e) => {
      
      navigation.navigate("InformacionPlatos", {idPlato: props.id, foodImage: props.image, foodTitle: props.title})
    }

  const eliminarPlato = ( id, image ) => {
    let platosNoVeganos=0;
    let platosVeganos=0;
    console.log(id)
    console.log("el menu",contextState.menu.listaPlatos)
    const newMenu=contextState.menu.listaPlatos.filter(word => word.id !== id)
    const platoEliminado=contextState.menu.listaPlatos.filter(word => word.id === id)
    
    console.log("el plato eliminado",platoEliminado)
    console.log("el nuevo menu",newMenu)
    let HealthTotal = contextState.menu.healthScore - platoEliminado[0].healthScore


    
    switch (platoEliminado[0].vegan) {
        case true:
          platosVeganos = 1
          break;
        case false:
        platosNoVeganos = 1
      }

      setContextState({
        type: ActionTypes.setMenu,
        value:{ 
        platoNoVeganos:(contextState.menu.platoNoVeganos - platosNoVeganos),
        platoVeganos:(contextState.menu.platoVeganos - platosVeganos),
        precioMenu:(contextState.menu.precioMenu - platoEliminado[0].pricePerServing),

        healthScore:(contextState.menu.healthScore - platoEliminado[0].healthScore),
        promedioHealthScore:(HealthTotal/ (contextState.menu.cantidadPlatos -1)),
                  
        cantidadPlatos:(contextState.menu.cantidadPlatos - 1),
        listaPlatos:newMenu
          
        }
      })
      

    navigation.navigate("Home")
  }

    
  return(
  <Card style={styles.carta}>
    
    <Card.Content>
      <Title>{props.title}</Title>
    
    </Card.Content>
    <Card.Cover source={{ uri: props.image }} />
    <Card.Actions>
    {!existen ?
      <Boton style={styles.masInfo}
      text="Mas Info"
      title="Mas Info"
      onPress={navegarInfo}
      />
    :
        <>
        <BotonEliminar
        text="Eliminar"
        title="Mas Info"
        onPress={ (e) =>{
          eliminarPlato(props.id, props.image)
          }}
        />
        </>
        }
      
   
    </Card.Actions>
  </Card>

  
  )
};

export default CardsComidas;


const styles = StyleSheet.create({
  carta: {
    marginTop:20,
    width:"100%",

},
  masInfo: {
    alignItems: 'center'
  },
  eliminar:{
    backgroundColor: "white",
  },
  image: {
    width:"75",
    alignItems: 'center',
  }
});