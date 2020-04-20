import React from 'react';
import { View, FlatList, ScrollView, Text } from 'react-native';

// import { Container } from './styles';

const aluno = [
    { id: 1, nome: 'Alencar ', nota: 7.9 },
    { id: 2, nome: 'Alencar ', nota: 7.9 },
    { id: 3, nome: 'Alencar ', nota: 7.9 },
    { id: 4, nome: 'Alencar ', nota: 7.9 },
    { id: 5, nome: 'Alencar ', nota: 7.9 },
    { id: 6, nome: 'Alencar ', nota: 7.9 },
    { id: 7, nome: 'Alencar ', nota: 7.9 },

    { id: 12, nome: 'Alencar ', nota: 7.9 },
    { id: 84, nome: 'Alencar ', nota: 7.9 },
    { id: 37, nome: 'Alencar ', nota: 7.9 },
    { id: 42, nome: 'Alencar ', nota: 7.9 },
    { id: 51, nome: 'Alencar ', nota: 7.9 },
    { id: 62, nome: 'Alencar ', nota: 7.9 },
    { id: 75, nome: 'Alencar ', nota: 7.9 },

    { id: 15, nome: 'Alencar ', nota: 7.9 },
    { id: 72, nome: 'Alencar ', nota: 7.9 },
    { id: 33, nome: 'Alencar ', nota: 7.9 },
    { id: 24, nome: 'Alencar ', nota: 7.9 },
    { id: 53, nome: 'Alencar ', nota: 7.9 },
    { id: 67, nome: 'Alencar ', nota: 7.9 },
    { id: 79, nome: 'Alencar ', nota: 7.9 },
]


const stiloScroll = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //justifyContent: (Este 'justifyContent' trabalha com o main)
    //flex
    alignItems: 'center' ,//'flex-start  , 'flex-end'       ^
    flexDirection: 'row', //Aqui, vai color o 'main axios' (|) pra pra horizontal (->)
    justifyContent:'space-between' //'center', 'flex-start  , 'flex-end' , 'space-between' , 'space-around'  
}
export const Aluno = props =>
    <View style={stiloScroll}>
        <Text>Nome:{props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota:{props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item}></Aluno>
    }

    return (
        <ScrollView>
            <FlatList data={aluno} renderItem={renderItem} keyExtractor={(_,index) => index.toString()}></FlatList>
        </ScrollView>
    )
}

