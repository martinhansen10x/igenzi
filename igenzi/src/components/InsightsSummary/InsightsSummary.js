import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors } from '../../styles/'

class InsightsSummary extends Component {

    render() {
        return (
          <View style={styles.insightsSummaryContainer}>
              <Text style={styles.btnText}>Insights Summary Appears here, progress bars for goals and achievements</Text>
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
      paddingVertical: 20,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.5)',
      height: Metrics.screenHeight * 0.25,
      backgroundColor: Colors.primaryColors.silver,
    },

  })