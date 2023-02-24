import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

export default class Header extends Component {
  render(){
    return (
      <View style={estilo.view}>
        <Image source={require('./logo.jpg')} style={estilo.logo}></Image> 
        <Text style={estilo.texto}>Cronometro Run</Text>
        <Text style={estilo.texto}>Auxiliando sua saúde</Text>
        </View>
    )
  }
}

const estilo = StyleSheet.create({
  view:{
    backgroundColor: '#778899',
  },

  logo:{
    marginTop:15,
    marginLeft: 170,
    marginRight: 150,
    alingItens:'center',
    width:150,
    height:150,
    borderRadius:10,
   
  },

  texto:{
    fontSize:20,
    textAlign: 'center',
    fontWeight:'bold',
    color:'black',
  },


})