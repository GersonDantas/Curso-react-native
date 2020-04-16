import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

// import { Container } from './styles';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
        <Router />
    </NavigationContainer>

  );
}
