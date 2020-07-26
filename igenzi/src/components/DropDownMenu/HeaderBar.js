import React, { Component } from "react";
import {Text, View, StyleSheet, Image } from 'react-native'
import {Metrics, Colors } from '../../styles/'
import Icon from 'react-native-vector-icons/Ionicons'

class HeaderBar extends Component {

    render() {
        return (
          <View style={styles.headerContainer}>
          <Image style={styles.centreLogo}
          source = {require('../../assets/images/igenziAppHeaderLogo.png')}/>
          <Icon name="caret-down-sharp" size={30} color= {Colors.primaryColors.gray} />
            </View>

        )
      }

}

module.exports = HeaderBar

const styles = StyleSheet.create({
    btnText:{
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    },
    headerContainer: {
      alignItems: 'center',
      backgroundColor: Colors.primaryColors.black,
    },
    centreLogo: {
        width: 75,
        height: 75,
        resizeMode: 'stretch',
    }

  })
