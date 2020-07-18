import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'

class HeaderBar extends Component {


    render() {
        return (
          <View style={styles.headerContainer}>
              <Text style={styles.btnText}>HEADER PANEL GOES HERE</Text>
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
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.5)',
      height: Metrics.screenHeight * 0.05,
    },

  })
