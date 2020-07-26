import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'
import NotificationListView from './notificationListView'

class NotificationsBar extends Component {

    render() {
        return (
          <View style={styles.notificationBarContainer}>
              <NotificationListView/>
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
    notificationBarContainer: {
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.5)',
      height: Metrics.screenHeight * 0.14,
      backgroundColor: Colors.primaryColors.black,
    },

  })