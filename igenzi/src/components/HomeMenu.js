import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { Colors } from '../styles'


class HomeMenu extends Component {

    items = [
        {
            name: 'md-home',
            color: Colors.circleMenu.home
        },
        {
            name: 'md-search',
            color: Colors.circleMenu.search
        },
        {
            name: 'md-rimw',
            color: Colors.circleMenu.time
        },
        {
            name: 'md-settings',
            color: Colors.circleMenu.settings
        },
        {
            name: 'md-navigate',
            color: Colors.circleMenu.navigate
        },
    ]
    
    render() {
        return <View>
        <Text>HELLO</Text>
        </View> 
      
    }
}

export default HomeMenu