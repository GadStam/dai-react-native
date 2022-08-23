import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Alert} from 'react-native';
import Boton from './BotonOne'
import {getReciepesInformation} from '../services/platoService'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {ActionTypes, useContextState} from '../contextState'



const CardsComidas = (props) => {
  

  const navigation = useNavigation();
  const {contextState, setContextState} = useContextState()
    const navegarInfo = async (e) => {
      console.log(props.id)
      navigation.navigate("InformacionPlatos", {idPlato: props.id, foodImage: props.image, foodTitle: props.title})
    }

    
  return(
  <Card style={styles.carta}>
    
    <Card.Content>
      <Title>{props.title}</Title>
     
    </Card.Content>
    <Card.Cover source={{ uri: props.image }} />
    <Card.Actions>
     {contextState.menu.listaPlatos.filter((element)=>element.id==props.id) ?
        <Boton
            text="eliminAR"
            title="Mas Info"
            onPress={ (e) =>{
              navigation.navigate('Home')
              }}
            />
        :
        <Text>ya esta EN EL MENU</Text>
      }
      
    <Boton
            text="Mas Info"
            title="Mas Info"
            onPress={navegarInfo}
            />
      <Button>Ok</Button>
    </Card.Actions>
  </Card>

  
  )
};

export default CardsComidas;


const styles = StyleSheet.create({
  carta: {
    marginTop:20
}
});