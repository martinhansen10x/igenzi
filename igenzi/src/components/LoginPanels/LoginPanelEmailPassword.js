import React, {Component} from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import {Colors, FontStyles, Metrics } from '../../styles/'
import ValidatedInputField from '../TextFields/ValidatedInputField'
import NextArrowButton from '../Buttons/NextArrowButton'
import * as RootNavigation from '../../navigation/RootNavigation'
import Spinner from 'react-native-loading-spinner-overlay'

class LoginPanelEmailPassword extends Component {

    constructor(props){
        super(props)
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this)
        this.handleNextButton = this.handleNextButton.bind(this)
    }

    handleEmailChange(email) {
        //eslint-disable-next-line
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const {validEmail} = this.state
        this.setState({emailAddress: email})
            if(emailCheckRegex.test(email)) {
                this.setState({validEmail: true})
            }
            else {
                this.setState({validEmail: false})
        }
    }

    handlePasswordChange(password) {
        const {validPassword} = this.state
        this.setState ({ password })
            if (password.length > 4){
                //todo - add password complexity enforcement minimum length, has symbol, mixed case, number
                this.setState({validPassword: true})
            }
            else {
                this.setState({validPassword: false})
            }
    }

    toggleNextButtonState(){
        const { validEmail, validPassword} = this.state
        if (validEmail && validPassword){
            return false
        }
        return true
    }

    handleNextButton(){
        this.setState({loadingVisible: true})
        //simulate the login result for now
        setTimeout(() => {
            const { emailAddress, password } = this.state
            if (emailAddress === 'test@igenzi.com' && password === 'igenzi'){
                this.setState({formValid: true, loadingVisible: false})
                //navigate to setPincode Panel
                RootNavigation.navigate('SMS2FA')
            } else {
                this.setState({formValid: false, loadingVisible: false})
                //show the error drop down notification toaster
            }
        }, 3000)
    }

    render () {
        const { validEmail, validPassword, loadingVisible} = this.state

        return (
            <View style={styles.LoginPanelContainer}>
                <View style={styles.LoginForm}>
                <ValidatedInputField
                    labelText={"EMAIL"}
                    labelTextSize={14}
                    labelColor={Colors.primaryColors.silver}
                    textColor={Colors.primaryColors.white}
                    borderBottomColor={Colors.primaryColors.powderblue}
                    inputType="email"
                    customStyle={{marginBottom:30}}
                    onChangeText={this.handleEmailChange}
                    showCheckmark={validEmail}
                    autoFocus={true}
                    autoCapitalize={'none'}
                    multiline={false}
                    numberOfLines={1}
                    textAlignVertical = {'top'}
                />
                     <ValidatedInputField
                    labelText={"PASSWORD"}
                    labelTextSize={14}
                    labelColor={Colors.primaryColors.silver}
                    textColor={Colors.primaryColors.white}
                    borderBottomColor={Colors.primaryColors.powderblue}
                    inputType="password"
                    customStyle={{marginBottom:30}}
                    onChangeText={this.handlePasswordChange}
                    showCheckmark={validPassword}
                    autoFocus={false}
                    autoCapitalize={'none'}
                    multiline={false}
                    numberOfLines={1}
                    textAlignVertical = {'top'}
                />
                </View>
                <NextArrowButton
                    handleNextButton={this.handleNextButton}
                    disabled={this.toggleNextButtonState()}
                />
                 <Spinner
                visible={loadingVisible}
                textContent={'One moment...'}
                textStyle={{ color: Colors.primaryColors.white }} />
            </View>
        )
    }
}

module.exports = LoginPanelEmailPassword

const styles = StyleSheet.create({
    LoginPanelContainer: {
        justifyContent: 'flex-start',
        height: Metrics.screenHeight * 0.75,
        backgroundColor: Colors.primaryColors.black,
        alignItems: 'center',
      },
      LoginForm: {
          marginVertical: 20,
          width: Metrics.screenWidth * 0.8,
          alignItems: 'center',
          justifyContent: 'center',
      },
      LoginTitleText: {
        ...FontStyles.generic.bold,
        fontSize: 16,
        color: Colors.primaryColors.silver,
        padding: 10,
        alignItems: 'center',
      },
      iconContainer:{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 50,
          width: Metrics.screenWidth,
      }
  })