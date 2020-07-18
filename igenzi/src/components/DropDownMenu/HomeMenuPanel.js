import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeMenuPanel extends Component {


    render() {
        return (
          <View style ={styles.menuPanelContainer}>
          <View style={styles.iconContainer}>
              <Icon name="rocket" size={30} color= {Colors.primaryColors.white} />
          </View>
           <Text style={styles.text}>
            DROP DOWN MENU PANEL GOES HERE
          </Text>
          </View>
        )
      }

}

module.exports = HomeMenuPanel

const styles = StyleSheet.create({
    menuPanelContainer: {
        justifyContent: 'flex-start',
        height: Metrics.screenHeight * 0.75,
        backgroundColor: Colors.circleMenu.time,
      },
      text: {
        fontSize: 17,
        color: 'black',
        padding: 10,
      },
      iconContainer:{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 50,
          width: Metrics.screenWidth,
      }
  })