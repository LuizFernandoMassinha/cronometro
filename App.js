import React, {Component} from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from './Header'
import Main from './Main'


export default class App extends Component {
  render(){
    return (
      <ScrollView>
      <View>
        <Header></Header>
        <Main></Main>
      </View>
      </ScrollView>
    )
  }
}

const estilo = StyleSheet.create({
  view:{
    margin: 20,
    flexDirection: 'column',
    alingItens:'center',
    justifyContent:'center',
    backgroundColor: 'lightblue',
  },
})