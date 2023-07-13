import {View , Text} from 'react-native'
import React from 'react'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

const Header = (props) => {
    return (
        <View style={{marginLeft:15}}>
            <Text style={{fontWeight:'bold', fontSize:30, color:'white'}}>
                {props.name}
            </Text>
        </View>,
        <View style={{marginLeft:15}}>
        <Text style={{fontWeight:'bold', fontSize:28,}}>
            {props.name}
        </Text>
    </View>
    )
}

export default Header