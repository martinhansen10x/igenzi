import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'

class NotificationsBar extends Component {

    render() {
        return (
          <View style={styles.statusBarContainer}>
              <Text style={styles.btnText}>Notifications Scroll Bar Goes Here</Text>
            </View>
        )
      }

}

module.exports = NotificationsBar

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
      backgroundColor: Colors.circleMenu.time,
    },

  })