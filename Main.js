import React, {Component} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
 
export default class Main extends Component {

constructor(prop){
  super(prop)
  this.state={
    minutos: 0,
    segundos: 0,
    ativo: false,
    voltas: []
}

this.pulsoDeClock = this.pulsoDeClock.bind(this);
this.iniciarClock = this.iniciarClock.bind(this);
this.pararClock = this.pararClock.bind(this);
this.marcarClock = this.marcarClock.bind(this);
this.zerarClock = this.zerarClock.bind(this);
}

pulsoDeClock(){
  var m = this.state.minutos;
  var s = this.state.segundos;
  if(s<59){
    s++;
  }else{
    m++;
    s = 0;
  }
  this.setState({segundos: s, minutos:m})
}

 iniciarClock(){
    if(!this.state.ativo){
      this.setState({clock : setInterval(this.pulsoDeClock,1000)});
      this.setState({ativo: true})
    }
  }

  pararClock(){
    if(this.state.ativo){
      clearInterval(this.state.clock);
        this.setState({ativo: false});
    }
    }
  
  marcarClock(){
    var txtDoCronometro = this.formatar(this.state.minutos) + ":" + this.formatar(this.state.segundos) + " / ";
    this.state.voltas.push(txtDoCronometro);
    this.forceUpdate();
    }

    formatar(t){
      return(t<10) ? "0" +t.toString() : t.toString();
    }

  zerarClock(){
      this.pararClock();
      this.setState({minutos:0,segundos:0});

      if(this.state.voltas.lengh>0){
        this.state.voltas.push('Zerar');
      }
    }

  render(){
    var txtM = this.formatar(this.state.minutos);
    var txtS = this.formatar(this.state.segundos);

    return (
    <View>
        <View style={estilo.view}>
          <Image source={require('./ImagemCronometro.jpg')} style={estilo.imagem}></Image> 
        </View>

        <View>
          <Text style={estilo.texto2}>{txtM}:{txtS}</Text> 

          <View style={estilo.buttonContainer}>
                <TouchableOpacity onPress={(this.state.ativo ? this.pararClock : this.iniciarClock)} style={estilo.containerButton}>
                  <Text style={estilo.textButton}>{this.state.ativo ? 'Pausar' : 'Iniciar'}</Text> 
                </TouchableOpacity>

                <TouchableOpacity onPress={(this.state.ativo ? this.marcarClock : this.zerarClock)} style={estilo.containerButton}>
                  <Text style={estilo.textButton}>{this.state.ativo ? 'Marcar Volta' : 'Zerar'} </Text> 
                </TouchableOpacity>
          </View>
            
            <View style={estilo.ViewVoltas}>
            <Text style={estilo.marcaVoltas}>{this.state.voltas}</Text>
            </View>
                <View style={estilo.containerButton2}>
                  <Text style={estilo.texto3}>LULETOTTI APLICATIVOS S.A.</Text>
           
                </View>
            </View>
        </View>
    )
  }
}

const estilo = StyleSheet.create({

  ViewVoltas:{
    flex: 1,
    flexDirection: 'column'
  },

  marcaVoltas:{
  
  fontWeight:'bold',
  fontSize: 55,
  textAlign:'center',
  flexDirection:'column',
  justifyContent:'space-evenly',
  margin: 5,
   
  },

  buttonContainer:{
    flexDirection:'row',
    padding: 20,
    justifyContent:'center',
  },

  containerButton:{
    height: 50,
    justifyContent: 'center',
    width: 50,
    alingItens: 'center',
    borderRadius: 4,
    backgroundColor: "blue",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "40%",
    textAlign: "center",
  },

  containerButton2:{
    height: 50,
    justifyContent: 'center',
    width: 100,
    backgroundColor: "#339009",
    minWidth: "100%",
    textAlign: "center",
    marginTop: 2,

  },

  textButton:{
    color:'white',
    textAlign:'center',
    fontSize:30,
  },

  view:{
    marginTop:40,
    marginLeft: 140,
    marginRight: 150,
    alingSelf:'center',
    alingItens:'center',
    width:350,
    height:280,
  },

  imagem:{
    width:196,
    height:250,
    alingItens:'center',
  },

  texto:{
    fontSize:20,
    alignContent:'center',
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
  },

  texto2:{
    fontSize:70,
    textAlign:'center',
    fontWeight:'bold',
    color:'black',
  },

  texto3:{
    fontSize:15,
    alignContent:'center',
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
  },

})