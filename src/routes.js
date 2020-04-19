import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Padrao from './estilo/Padrao';
import Inverter, {MegaSena} from './componentes/Multi';
import ParImpar from './componentes/parImpar';
import Simples from './componentes/Simples';
import Plataformas from './componentes/plataformas'
import ValidarProps from './componentes/validarProps'
import Evento from './componentes/evento'
import Avo from './componentes/comunicacaoDireta'
import TextoSincronizado from './componentes/comunicacaoIndireta'


const Drawer = createDrawerNavigator();

export default function Routes(){
  return(
    <Drawer.Navigator initialRouteName='Indireta'>
      <Drawer.Screen name='Indireta' title={{title: 'Comunicação indireta'}}>
        {
          () => <TextoSincronizado></TextoSincronizado>
        }
      </Drawer.Screen>
       <Drawer.Screen name='Avo' title={{title: 'Avo'}}>
        {
          () => <Avo nome='Manoel' sobrenome='dantas'></Avo>
        }
      </Drawer.Screen>
      <Drawer.Screen name='Evento' title={{title: 'Evento'}}>
        {
          () => <Evento></Evento>
        }
      </Drawer.Screen>
      <Drawer.Screen  name='ValidarProps' options={{title: 'prps'}}>
        {
          props => <ValidarProps {...props} label="teste"></ValidarProps>
        }
      </Drawer.Screen>
      <Drawer.Screen  name='Plataformas' options={{title: 'Mega Plataforma'}}>
        {
          props => <Plataformas {...props}></Plataformas>
        }
      </Drawer.Screen>
      <Drawer.Screen  name='MegaSena' options={{title: 'Mega Sena'}}>
        {
          props => <MegaSena {...props} numeros={8}></MegaSena>
        }
      </Drawer.Screen>
      <Drawer.Screen name='Inverter' options={{title: 'Inverter'}}>
        {
          props => <Inverter {...props} texto="React-native"></Inverter>
        }
      </Drawer.Screen>
      <Drawer.Screen name='ParImpar' options={{title: 'Par e impar'}}>
        {
          props => <ParImpar {...props} numeros={8}></ParImpar>
        }
      </Drawer.Screen>
      <Drawer.Screen name='Simples' options={{title: 'Texto simples'}}>
        {
          props => <Simples {...props} numeros={8}></Simples>
        }
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}