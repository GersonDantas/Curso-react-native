import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';
import Padrao from '..//estilo/Padrao'


// import { Container } from './styles';

export default class Evento extends Component{
    state = {     //STATE É UMA VARIAVEL DOIDO!!!!!!!!!!
        texto:''
    }

    AlterarTexto = texto =>{
        this.setState({texto})
    }

    render(){
        return(
            <View>
                <Text style={Padrao.font40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto} style={Padrao.input}
                onChangeText={this.AlterarTexto}></TextInput>
            </View>
        )
    }
}