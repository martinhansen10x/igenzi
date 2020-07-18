import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import {Metrics, Colors , FontStyles} from '../../styles/'

class CareerInsightsMainPanel extends Component {

    render() {
        return (
            <View style={styles.insightsPanelWrapper}>
              <Text style={styles.notificationTitleLabel}> YOUR CAREER INSIGHTS</Text>
               <Text style={styles.ViewAllTitleLabel}> VIEW ALL</Text>
             <View style={styles.careerInsightsMainPanelContainer}>
             <Text style={styles.labelText}>Your Career Goals Progress & Insights wil appear here</Text>
            </View>
            </View>
        )
      }

}

module.exports = CareerInsightsMainPanel

const styles = StyleSheet.create({
    text:{
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    },
    insightsPanelWrapper:{
     height: Metrics.screenHeight * 0.20,
    },
    careerInsightsMainPanelContainer: {
        marginTop: 5,
        marginHorizontal: 10,
      height: Metrics.screenHeight * 0.15,
      backgroundColor: Colors.primaryColors.black,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Colors.primaryColors.charcoal,
      justifyContent: 'center',
    },
    notificationTitleLabel: {
        paddingVertical: 5,
        ...FontStyles.generic.bold,
        fontSize: 14,
        color: Colors.primaryColors.gray,
      },
      ViewAllTitleLabel: {
        position: 'absolute',
        right: 5,
        paddingVertical: 5,
        ...FontStyles.generic.bold,
        fontSize: 12,
        color: Colors.primaryColors.powderblue,
      },
      labelText: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        ...FontStyles.generic.bold,
        fontSize: 14,
        color: Colors.primaryColors.gray,
      },

  })