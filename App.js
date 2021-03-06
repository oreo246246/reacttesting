import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity,ScrollView } from 'react-native';
import { Constants } from 'expo';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right,Title } from 'native-base';


export default class App extends React.Component {


  render() {
    let menuItems = [];
        for (var i = 0; i < 20; i++) {
            menuItems.push(

              <TouchableOpacity onPress={() => console.log('Yea')}>
                        <Card id = {i}>
                                     <CardItem>
                                       <Body>
                                       <View style = {{
                                       flex: 1,
                                       alignItems: 'center',
                                       flexDirection: 'row',
                                       justifyContent: 'space-between',
                                       }
                                       }>
                           <Image

                               style={styles.fit}
                               source={require('./flower.jpg')}
                             />

                             <View style = {{
                             flex: 1,
                             flexDirection: 'column',
                             justifyContent: 'space-between',
                             }
                             }>
                             <Text>this is a simple card with image and title</Text>
                              <Text>this is a simple card with image and title2</Text>
                               <Text>this is a simple card with image and title3</Text>
</View>
                 </View>
                           </Body>
                         </CardItem>
                       </Card>
        </TouchableOpacity>
        );
        }




    return (
<View style={styles.topBar}>
      <Text style={styles.topBar2}>Ouri's App</Text>
<ScrollView>
      {menuItems}
</ScrollView>

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
