import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
    container:{
        height: '100%',
    },
    norte:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#988fff',
        justifyContent: 'center'
    },
    centro:{
        flex:2, //usador para dizer quanto o container vair creser, dependendo de seu valor aqui
        flexDirection: 'row',//mudei a direção do main-over
        alignItems: 'center',
        justifyContent: 'space-between', //'space-evenly'
        paddingHorizontal: 10,
        backgroundColor: '#f98789',
    },
    sul:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#988fff',
        justifyContent: 'center'
    },
    circulo:{
        width: 100,
        height: 100,
        backgroundColor: '#45b',
        borderRadius: 50,
    },
});

const Circulo = props => <View style={styles.circulo}></View>


export default props =>{
    return(
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo></Circulo>
            </View>
            <View style={styles.centro}>
                <Circulo></Circulo>
                <Circulo></Circulo>
                <Circulo></Circulo>
            </View>
            <View style={styles.sul}>
                <Circulo></Circulo>
            </View>
        </View>
    )
}
