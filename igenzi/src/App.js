/**
 * Igenzi App Blank Page
 * 
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  SafeAreaView,
  Text,
} from 'react-native'
import { ParentStyles, FontStyles } from './styles'
import HomeMenu from './components/HomeMenu'
import CircleMenu from './components/CircleMenu'
function App() {
  return (
    <SafeAreaView style = {ParentStyles.container}>
      <Text style={FontStyles.ios.bold}>Welcome to igenzi</Text>
      <HomeMenu/>
    </SafeAreaView>
  )
}

export default App
