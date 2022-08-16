import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Alert} from 'react-native';
import Boton from './BotonOne'
import {getReciepesInformation} from '../services/platoService'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';




const CardsComidas = (props) => {
  

  const navigation = useNavigation();
  
    const navegarInfo = async (e) => {
      console.log(props.id)
      navigation.navigate("InformacionPlatos", {idPlato: props.id})
    }

    
  return(
  <Card style={styles.carta}>
    
    <Card.Content>
      <Title>{props.title}</Title>
     
    </Card.Content>
    <Card.Cover source={{ uri: props.image }} />
    <Card.Actions>
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