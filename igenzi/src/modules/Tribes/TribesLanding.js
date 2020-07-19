/**
 * Tribes Landing Page
 * 
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react'
import {
  SafeAreaView,
} from 'react-native'
import { ParentStyles } from '../../styles/'
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu'
import TitleStatusBar from '../../components/TitleStatusBar/TItleStatusBar'
import TribesCarousel from '../../components/TribesCarousel/TribesCarousel'
import NotificationsBar from '../../components/NotificationsBar/NotificationsBar'
import StatusUpdatesBar from '../../components/StatusUpdatesBar/StatusUpdatesBar'
import InsightsSummary from '../../components/InsightsSummary/InsightsSummary'

class TribesLanding extends Component {

render() {
  return (
    <SafeAreaView style = {ParentStyles.container}>
      <DropDownMenu/> 
      <TitleStatusBar/>
      <TribesCarousel />
      <NotificationsBar/>
      <InsightsSummary/>
      <StatusUpdatesBar/>
    </SafeAreaView>
  )
}
}

export default TribesLanding