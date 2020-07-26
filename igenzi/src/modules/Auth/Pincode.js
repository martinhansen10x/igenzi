/**
 * Pincode Page
 * 
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react'
import {
  SafeAreaView,
} from 'react-native'
import { ParentStyles, Colors } from '../../styles/'
import LoginLogoBar from '../../components/LoginPanels/LoginLogoBar'
import PINCode from '@haskkor/react-native-pincode'
import * as RootNavigation from '../../navigation/RootNavigation'

class Pincode extends Component {

    constructor(props){
        super(props)
        this.state = {
            pinCodeSet: false,
            loadingVisible: false,
        }
        this.handlePinEnter = this.handlePinEnter.bind(this)
    }

    handlePinEnter()
    {
        this.setState({loadingVisible: false})
        setTimeout(() => {
            this.setState({formValid: true, loadingVisible: false})
            RootNavigation.navigate('TribesLanding')
        }, 500)
    }

    _pinCodeSet = () => {
        Alert.alert('Success!', 'You have successfully set your pincode')
      }

render() {
  return (
    <SafeAreaView style = {ParentStyles.container}>
    <LoginLogoBar/> 
    <PINCode status={'choose'}
        colorPassword={Colors.primaryColors.powderblue}
        stylePinCodeColorTitle={Colors.primaryColors.white}
        stylePinCodeColorSubtitle={Colors.primaryColors.silver}
        numbersButtonOverlayColor={Colors.primaryColors.powderblue}
        finishProcess={() => this.handlePinEnter()}
    />
   </SafeAreaView>
  )
}
}

export default Pincode