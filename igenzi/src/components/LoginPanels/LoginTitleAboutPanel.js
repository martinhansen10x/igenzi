import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'
import Icon from 'react-native-vector-icons/FontAwesome'

class LoginTitleAboutPanel extends Component {


    render() {
        return (
          <View style ={styles.menuPanelContainer}>
          <View style={styles.iconContainer}>
              <Icon name="rocket" size={30} color= {Colors.primaryColors.white} />
          </View>
           <Text style={styles.text}>
            Login Feature Tour Content / about app goes here
          </Text>
          </View>
        )
      }

}

module.exports = LoginTitleAboutPanel

const styles = StyleSheet.create({
    menuPanelContainer: {
        justifyContent: 'flex-start',
        height: Metrics.screenHeight * 0.70,
        backgroundColor: Colors.primaryColors.black,
      },
      text: {
        fontSize: 12,
        color: Colors.primaryColors.silver,
        padding: 10,
      },
      iconContainer:{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 50,
          width: Metrics.screenWidth,
      }
  })