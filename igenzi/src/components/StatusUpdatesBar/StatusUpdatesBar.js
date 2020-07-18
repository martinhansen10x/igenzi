import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'
import StatusListView from './statusListView'

class StatusUpdatesBar extends Component {

    render() {
        return (
          <View style={styles.statusBarContainer}>
              <StatusListView/>
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
      height: Metrics.screenHeight * 0.11,
      backgroundColor: Colors.primaryColors.black,
    },

  })