import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../styles'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native'

class ValidatedInputField extends Component {

    constructor(props){
        super(props)
        this.state = {
            secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
            scaleCheckmarkValue: new Animated.Value(0),
        }
        this.toggleShowPassword = this.toggleShowPassword.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
    }

    scaleCheckmark(value) {
        Animated.timing(
            this.state.scaleCheckmarkValue,
            {
                toValue: value,
                duration: 400,
                easing: Easing.easeOutBack,
                useNativeDriver: true,
            },
        ).start()
    }

    toggleShowPassword(){
        this.setState({secureInput: !this.state.secureInput})
    }

    onChangeText(text){
        this.props.onChangeText(text)
        this.setState({ inputValue:text })
    }

    render(){
        const {
            labelText,
            labelTextSize,
            labelColor,
            textColor,
            borderBottomColor,
            inputType,
            customStyle,
            onChangeText,
            showCheckmark,
            multiLine,
            numberOfLines,
            textAlignVertical,
            autoFocus,
            autoCapitalize,
            textValue
        } = this.props
        const { secureInput, scaleCheckmarkValue } = this.state
        const fontSize = labelTextSize || 14
        const titleColor =  labelColor || Colors.primaryColors.white
        const inputColor = textColor || Colors.primaryColors.white
        const borderBottom = borderBottomColor || 'transparent'
        const keyboardType = inputType === 'email' ? 'email-address' : 'default'

        const iconScale = scaleCheckmarkValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.01, 1.6, 1]
        })
        const scaleValue = showCheckmark ? 1 : 0
        this.scaleCheckmark(scaleValue)

        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{color:titleColor}, {fontSize:fontSize}, styles.label]}>{labelText}</Text>
                {inputType === 'password' ?
                ( <TouchableOpacity
                style={styles.showButton}
                onPress={this.toggleShowPassword}
                >
                <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>)
                : null }
                <Animated.View style={[{ transform: [{scale: iconScale}]}, styles.checkmarkWrapper]}>
                    <Ionicons
                    name="md-checkmark"
                    color={Colors.primaryColors.white}
                    size={20}/>
                </Animated.View>
                <TextInput 
                    autoCorrect={false}
                    autoFocus={autoFocus}
                    autoCapitalize={autoCapitalize}
                    style={[{color: inputColor, borderBottomColor: borderBottom, fontSize: 24}, styles.inputField]}
                    multiline={multiLine}
                    secureTextEntry={secureInput}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    numberOfLines={numberOfLines}
                    textAlignVertical={textAlignVertical}
                    value={textValue}
                />
            </View>
        )
    }
}

module.exports = ValidatedInputField

ValidatedInputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    showCheckmark: PropTypes.bool.isRequired,
    autoFocus: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    multiLine: PropTypes.bool,
    numberOfLines: PropTypes.number,
    textAlignVertical: PropTypes.string,
    textValue: PropTypes.string,
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    label: {
        fontWeight: '700',
        marginBottom: 20,
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    },
    showButton: {
        position: 'absolute',
        right: 0
    },
    showButtonText: {
        color: Colors.primaryColors.white,
        fontWeight: '700',
    },
    checkmarkWrapper:{
        position: 'absolute',
        right: 0,
        bottom: 12
    }
})