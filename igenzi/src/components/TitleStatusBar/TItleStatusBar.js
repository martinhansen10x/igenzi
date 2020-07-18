import React, { Component } from "react";
import {Text, View, StyleSheet, Image } from 'react-native'
import {Metrics, Colors, FontStyles } from '../../styles/'


class TitleStatusBar extends Component {

    render() {
        return (
          <View style={styles.titleStatusBarContainer}>
              <Text style={styles.title}>Hello Martin,</Text>
              <Text style={styles.subtitle}>Monday 20th July, 2020: 12:35pm GMT</Text>
            <View style={styles.avatarContainer}>
            <Image style={styles.avatar}
          source = {require('../../assets/images/avatar_1.jpg')}/>
            </View>
            </View>
        )
      }

}

module.exports = TitleStatusBar

const styles = StyleSheet.create({
    title:{
      ...FontStyles.generic.regular,
      textAlign: 'left',
      color: Colors.primaryColors.white,
      fontSize: 34,
      paddingLeft: 5,
    },
    subtitle:{
      ...FontStyles.generic.bold,
      textAlign: 'left',
      textTransform: 'uppercase',
      color: Colors.primaryColors.silver,
      fontSize: 10,
      paddingLeft: 5,
    },
    titleStatusBarContainer: {
      paddingVertical: 5,
      height: Metrics.screenHeight * 0.08,
      backgroundColor: Colors.primaryColors.black,
    },
    avatarContainer: {
      position: 'absolute',
      right: 10,
      top: 5,
    },
    avatar: {
      width: 60,
      height: 60,
      borderWidth: 1,
      borderColor: Colors.primaryColors.gray,
      borderRadius: 35,
      resizeMode: 'contain',
  }

  })