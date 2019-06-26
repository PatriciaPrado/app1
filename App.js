import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {contador: 0};
  }

  onPress = (acao) => {
    if(acao == '+'){
      this.setState({
      contador: this.state.contador + 1
    })
  } else {
    this.setState({
    contador: this.state.contador - 1
  })
  }
  
  render() {
    return (
      <View>
        <TouchableOpacity style={estilo.botao} onPress={()=>{this.onPress('+') }}>
          <Text style = {estilo.descricao}>Incrementar</Text>
        </TouchableOpacity>
        <Text style = {estilo.cont}>
          {this.state.contador !== 0 ? this.state.contador : null}
        </Text>
        <TouchableOpacity style={estilo.botao} onPress={()=>{this.onPress('-') }}>
          <Text style = {estilo.descricao}>Decrementar</Text>
        </TouchableOpacity>
      </View>
    )};
};

// 
const estilo = StyleSheet.create({
  botao:{
    padding: 20,
    backgroundColor: '#C0C0C0',
  },
  descricao:{
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#DDD',
  },
  cont:{
    backgroundColor: '#DDD',
    textAlign: 'center',
    fontSize: 60,
    color: 'red',
  }
})