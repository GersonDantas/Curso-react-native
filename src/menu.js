import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'

export default function Menu(){
    return(
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}