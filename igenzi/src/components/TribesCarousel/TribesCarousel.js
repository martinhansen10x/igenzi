import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'
import CarouselComponent  from './carousel'

class TribesCarousel extends Component {

    render() {
        return (
          <View style={styles.tribesCarouselContainer}>
              <CarouselComponent/>
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
    tribesCarouselContainer: {
      height: Metrics.screenHeight * 0.25,
      backgroundColor: Colors.primaryColors.black,
    },

  })