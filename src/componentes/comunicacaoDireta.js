import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const font = { style: { fontSize: 40 } };

function sobrenomeFilhos(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Filho = props =>
    <View>
        <Text {...font}>Fonte:{props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...font}>Fonte:{props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}
        {sobrenomeFilhos(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...font}>Fonte:{props.nome} {props.sobrenome}</Text>
        <Pai nome='Branco' sobrenome={props.sobrenome}>
            <Filho nome='gerson'></Filho>
            <Filho nome='aninha'></Filho>
            <Filho nome='arlindo'></Filho>
        </Pai>
        <Pai {...props} nome='Nenem'>
            <Filho nome='Poliana'></Filho>
            <Filho nome='Marinaldo'></Filho>
        </Pai>
    </View>


export default Avo