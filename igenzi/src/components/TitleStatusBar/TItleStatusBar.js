import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'


class TitleStatusBar extends Component {

    render() {
        return (
          <View style={styles.titleStatusBarContainer}>
              <Text style={styles.text}>Title Status Bar Content Goes Here</Text>
            </View>
        )
      }

}

module.exports = TitleStatusBar

const styles = StyleSheet.create({
    text:{
      textAlign: 'center',
      color: Colors.primaryColors.white,
      fontSize: 20,
    },
    titleStatusBarContainer: {
      paddingVertical: 20,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.5)',
      height: Metrics.screenHeight * 0.10,
      backgroundColor: Colors.primaryColors.black,
    },

  })