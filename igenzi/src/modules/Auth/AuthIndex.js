/**
 * Auth Index Page
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
import LoginTitleMenuBar from '../../components/LoginPanels/LoginTitleMenuBar'
import LoginDropDownMenu from '../../components/LoginPanels/LoginDropDownMenu'
import RegisterDropDownMenu from '../../components/LoginPanels/RegisterDropDownMenu'

class TribesLanding extends Component {

render() {
  return (
    <SafeAreaView style = {ParentStyles.container}>
    <LoginTitleMenuBar/> 
    <LoginDropDownMenu/>
    <RegisterDropDownMenu/>
   </SafeAreaView>
  )
}
}

export default TribesLanding