/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Simples  from './componentes/Simples'

export default () => {
  return [
    <View style={styles.container}>
      <Simples texto='flexivel!'/>
    </View>
  ];
};

// export default App class extends React.Component {
//     render() {
//       return {
//         <>
//           <View style={styles.engine}>
//             <Text style={styles.footer}>Engine: Hermes</Text>
//           </View>
//         </>
//       }
//     }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  // f20:{
  //   fontSize: 40,
  // },
});
