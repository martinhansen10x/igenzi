import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import {Colors, FontStyles, Metrics } from '../../styles/'
import ValidatedInputField from '../TextFields/ValidatedInputField'
import NextArrowButton from '../Buttons/NextArrowButton'
import ActivityLoaderModal from '../ActivityLoader/ActivityLoaderModal'
import * as RootNavigation from '../../navigation/RootNavigation'

class RegisterAccount extends Component {

    constructor(props){
        super(props)
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            inviteCode: '',
            validCode: false,
            loadingVisible: false,
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleCodeChange = this.handleCodeChange.bind(this)
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

    handleCodeChange(inviteCode) {
        const {validCode} = this.state
        this.setState ({ inviteCode: inviteCode })
            if (inviteCode === "1234"){
                //todo - verify the code against the server here
                this.setState({validCode: true})
            }
            else {
                this.setState({validCode: false})
            }
    }

    toggleNextButtonState(){
        const { validEmail, validCode} = this.state
        if (validEmail && validCode){
            return false
        }
        return true
    }

    handleNextButton(){
        this.setState({loadingVisible: true})
        //simulate the login result for now
        setTimeout(() => {
            const { emailAddress, inviteCode } = this.state
            if (emailAddress === 'test@igenzi.com' && inviteCode=== '1234'){
                this.setState({formValid: true, loadingVisible: false})
                //navigate to setPincode Panel
                RootNavigation.navigate('TribesLanding')
            } else {
                this.setState({formValid: false, loadingVisible: false})
                //show the error drop down notification toaster
            }
        }, 1500)
    }

    render () {
        const { validEmail, validCode, loadingVisible} = this.state

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
                    labelText={"INVITE CODE"}
                    labelTextSize={14}
                    labelColor={Colors.primaryColors.silver}
                    textColor={Colors.primaryColors.white}
                    borderBottomColor={Colors.primaryColors.powderblue}
                    inputType="text"
                    customStyle={{marginBottom:30}}
                    onChangeText={this.handleCodeChange}
                    showCheckmark={validCode}
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
                <ActivityLoaderModal
                modalVisible={loadingVisible}
                disabled={this.toggleNextButtonState}
                >

                </ActivityLoaderModal>
            </View>
        )
    }
}

module.exports = RegisterAccount

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