import React, { Component } from "react";
import {Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native'
import LoginTitleHeader from './LoginTitleHeader'
import LoginTitleAboutPanel from './LoginTitleAboutPanel'
import { Colors } from "../../styles";

class LoginTitleMenuBar extends Component {

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
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.btn}>
          <LoginTitleHeader/>
        </TouchableOpacity>
        <View style={{ height : this.state.expanded ? null : 0, overflow:'hidden'}}>
          <LoginTitleAboutPanel/>
        </View>
      </View>
      </View>
    )
  }
}

module.exports = LoginTitleMenuBar

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
    borderBottomColor: Colors.primaryColors.gray,
  },
  btn:{
    backgroundColor: Colors.primaryColors.black,
  },

})