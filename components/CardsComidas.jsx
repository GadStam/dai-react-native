import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet} from 'react-native';

//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardsComidas = (props) => (
  <Card style={styles.carta}>
    
    <Card.Content>
      <Title>{props.title}</Title>
     
    </Card.Content>
    <Card.Cover source={{ uri: props.image }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default CardsComidas;


const styles = StyleSheet.create({
  carta: {
    marginTop:20
}
});