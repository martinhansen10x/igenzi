import React, { Component } from "react";
import {View, StyleSheet, LayoutAnimation, Platform, UIManager, Keyboard } from 'react-native'
import LoginMenuBar from './LoginMenuBar'
import RegisterAccount from './RegisterAccount'
import { Colors } from "../../styles";

class RegisterDropDownMenu extends Component {

  constructor() {
    super();
  this.state = { expanded: false}
  if (Platform.OS === 'android'){
  UIManager.setLayoutAnimationEnabledExperimental(true)  
  }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({expanded: !this.state.expanded })
    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.headerContainer}>
          <LoginMenuBar
          disabled={false}
          buttonLabel={!this.state.expanded ? 'REGISTER' : 'X'}
          handleNextButton={this.changeLayout}
          />
        <View style={{ height : this.state.expanded ? null : 0, overflow:'hidden'}}>
          <RegisterAccount/>
        </View>
      </View>
      </View>
    )
  }
}

module.exports = RegisterDropDownMenu

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 17,
    color: 'black',
    padding: 10,
  },
  btnText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColors.charcoal,
  },
  btn:{
    backgroundColor: Colors.primaryColors.black,
  },

})