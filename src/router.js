import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Inverter,{ MegaSena } from './componentes/Multi';
import Menu from './menu';
import ParImpar from './componentes/parImpar';
import Simples from './componentes/Simples';
import Contador from './componentes/contador';

const Stack = createStackNavigator();

export default function Router() {
  return (
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="MegaSena" options={{title: 'Mega Sena'}}>
            {() => <MegaSe0na numeros={8}/>}
        </Stack.Screen>
        <Stack.Screen name="Inverter" options={{title: 'Inverter'}}>
            {() => <Inverter texto="React Native"/>}
        </Stack.Screen>
        <Stack.Screen name="ParImpar" options={{title: 'Par & impar'}}>
          {()=> <ParImpar numero={10}></ParImpar>}
        </Stack.Screen>
        <Stack.Screen name="Simples" options={{title: 'Coisa simples'}}>
          {()=> <Simples texto="Curso React"></Simples>}
        </Stack.Screen>
        <Stack.Screen name="Contador" options={{title: 'Contador'}}>
          {()=> <Contador initialNumber={8}></Contador>}
        </Stack.Screen>
      </Stack.Navigator>
  );
}