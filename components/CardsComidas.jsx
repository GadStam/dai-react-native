import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Alert} from 'react-native';
import Boton from './BotonOne'
import {getReciepesInformation} from '../services/platoService'
import { useState } from 'react';




const CardsComidas = (props) => {
  const [informacion, setInformacion] = useState({
    info:[]
  })
  
  const masInformacion = async (e) => {
      await getReciepesInformation(props.id).then((response) => {
        console.log(response)
        setInformacion({info: response})
      })
      .catch(() => {
        console.log("noooo")
        
        Alert.alert("Datos incorrectos")
      });
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
            onPress={masInformacion}
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