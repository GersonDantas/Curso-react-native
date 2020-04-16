import React, { useState } from "react";
import { DrawerLayoutAndroid, Text, View} from 'react-native'
import {MegaSena} from './componentes/Multi';
import Padrao from './estilo/Padrao'

const Menu = ({navigation}) => {
   

    const tela = <MegaSena></MegaSena>
    
    const navigationView = (
        <View style={Padrao.ex}>
          <Text style={Padrao.ex} onPress={()=> navigation.navigate('MegaSena',{params: { numeros: 8 }})}>MegaSena</Text>
          <Text style={Padrao.ex}  onPress={()=> navigation.navigate('Inverter')}>Inverter</Text>
          <Text style={Padrao.ex}  onPress={()=> navigation.navigate('ParImpar')}>Par & impar</Text>
          <Text style={Padrao.ex}  onPress={()=> navigation.navigate('Simples')}>Coisa simples</Text>
          <Text style={Padrao.ex}  onPress={()=> navigation.navigate('Contador')}>Contador</Text>
        </View>
      );
      
    return(
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={'left'}
            renderNavigationView={() => navigationView}
            >
            <View style={Padrao.ex}>
                {tela}
            </View>
        </DrawerLayoutAndroid>
    )
}

export default Menu;