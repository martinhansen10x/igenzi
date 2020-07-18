import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'

class StatusUpdatesBar extends Component {

    render() {
        return (
          <View style={styles.statusBarContainer}>
              <Text style={styles.btnText}> Activity Status Updates e.g application status, tribe applications etc goe here</Text>
            </View>
        )
      }

}

module.exports = StatusUpdatesBar

const styles = StyleSheet.create({
    text:{
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    },
    statusBarContainer: {
      paddingVertical: 20,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.5)',
      height: Metrics.screenHeight * 0.11,
      backgroundColor: Colors.circleMenu.home,
    },

  })