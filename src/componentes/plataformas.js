import * as React from 'react';
import {Button, ToastAndroid, Platform, Alert} from 'react-native'

export default props => {
    const notificar = msg =>{
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.LONG)
        }else{
            Alert.alert('informações', msg)
        }
    }

    return(
        <Button title="PLataforma?" onPress={()=>notificar('parabens')}/>
    )
}
