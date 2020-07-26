import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'
import CareerInsightsMainPanel from './careerInsightsMainPanel'

class InsightsSummary extends Component {

    render() {
        return (
          <View style={styles.insightsSummaryContainer}>
              <CareerInsightsMainPanel/>
            </View>
        )
      }

}

module.exports = InsightsSummary

const styles = StyleSheet.create({
    text:{
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    },
    insightsSummaryContainer: {
      height: Metrics.screenHeight * 0.20,
      backgroundColor: Colors.primaryColors.black,
      marginBottom: 10,
    },

  })