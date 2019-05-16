import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right,Title } from 'native-base';


export default class App extends React.Component {
  render() {
    return (
<View style={styles.topBar}>


      <Text style={styles.topBar2}>Ouri's App</Text>

                <Card>
                 <CardItem>
                   <Body>
                     <Text>this is a simple card with image and title2</Text>
                   </Body>
                 </CardItem>
               </Card>


</View>

    );
  }

}




const styles = StyleSheet.create({
  topBar: {
      display: 'flex',
      width: '100%',
      backgroundColor: '#fff',
      height: '100%',


    },
    topBar2: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#000000',
    top: 0,
    height: 100,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',

  },
  navText: {

      color: 'red',
    fontWeight: 'bold',
        left: 100,
        top: 100,
  },

  textBlack: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
