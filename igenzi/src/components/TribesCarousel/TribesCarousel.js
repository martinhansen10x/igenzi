import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'

class TribesCarousel extends Component {

    render() {
        return (
          <View style={styles.statusBarContainer}>
              <Text style={styles.btnText}>Tribes Carousel Content Goes Here, Maybe Inside a collapsible scroll header view?</Text>
            </View>
        )
      }

}

module.exports = TribesCarousel

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
      height: Metrics.screenHeight * 0.28,
      backgroundColor: Colors.circleMenu.search,
    },

  })