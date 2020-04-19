import React from 'react';
import PropType from 'prop-types';
import { Text } from 'react-native';

// import { Container } from './styles';

const ValidarProps = props =>
    <Text style={{fontSize: 35}}>
        {props.label}: 
        {props.ano}
    </Text>

ValidarProps.defaultProps = {
    label: 'ano'
  };

ValidarProps.propType = {
    ano: PropType.number.isRequired
}

export default ValidarProps;