import React, { Component } from "react";
import {Text, View, StyleSheet, Image } from 'react-native'
import {Metrics, Colors } from '../../styles/'
import LoginMenuButton from '../Buttons/LoginMenuButton'


class HeaderBar extends Component {


    render() {
        const { disabled, handleNextButton, buttonLabel } = this.props
        return (
          <View style={styles.headerContainer}>
          <LoginMenuButton
          disabled={disabled}
          handleNextButton={handleNextButton}
          buttonLabel={buttonLabel}
          />
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
        paddingTop: 20,
      alignItems: 'center',
      backgroundColor: Colors.primaryColors.black,
      justifyContent: 'center',
    },
    centreLogo: {
        width: 75,
        height: 75,
        resizeMode: 'stretch',
    }

  })
