import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'

class HomeMenuPanel extends Component {


    render() {
        return (
          <View style ={styles.menuPanelContainer}>
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
  })