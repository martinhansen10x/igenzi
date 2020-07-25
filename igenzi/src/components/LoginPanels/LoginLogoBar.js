import React, { Component } from "react";
import {View, StyleSheet, Image } from 'react-native'
import { Colors } from '../../styles/'


class LoginLogoBar extends Component {

    render() {
        return (
          <View style={styles.headerContainer}>
          <Image style={styles.centreLogo}
          source = {require('../../assets/images/igenziAppHeaderLogo.png')}/>
            </View>

        )
      }

}

module.exports = LoginLogoBar

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