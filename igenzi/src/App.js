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
} from 'react-native'
import { ParentStyles } from './styles'
import DropDownMenu from './components/DropDownMenu/DropDownMenu'
import TitleStatusBar from './components/TitleStatusBar/TItleStatusBar'
import TribesCarousel from './components/TribesCarousel/TribesCarousel'
import NotificationsBar from './components/NotificationsBar/NotificationsBar'
import StatusUpdatesBar from './components/StatusUpdatesBar/StatusUpdatesBar'
import InsightsSummary from './components/InsightsSummary/InsightsSummary'
import LoginTitleMenuBar from './components/LoginPanels/LoginTitleMenuBar'
import LoginDropDownMenu from './components/LoginPanels/LoginDropDownMenu'
import RegisterDropDownMenu from './components/LoginPanels/RegisterDropDownMenu'
function App() {

  return (
    <SafeAreaView style = {ParentStyles.container}>
      <LoginTitleMenuBar/> 
      <LoginDropDownMenu/>
      <RegisterDropDownMenu/>
    </SafeAreaView>
  )
}

export default App
