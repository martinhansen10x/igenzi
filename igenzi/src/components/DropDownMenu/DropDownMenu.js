import React, { Component } from "react";
import {Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native'
import HeaderBar from './HeaderBar'
import HomeMenuPanel from './HomeMenuPanel'

class DropDownMenu extends Component {

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
          <HeaderBar/>
        </TouchableOpacity>
        <View style={{ height : this.state.expanded ? null : 0, overflow:'hidden'}}>
          <HomeMenuPanel/>
        </View>
      </View>
      </View>
    )
  }
}

module.exports = DropDownMenu

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
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)'
  },
  btn:{
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

})

