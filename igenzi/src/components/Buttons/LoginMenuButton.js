import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import {
    TouchableHighlight,
    StyleSheet,
    View,
    Text,
} from 'react-native'
import {Colors, FontStyles} from '../../styles/'
import Ionicons from 'react-native-vector-icons/Ionicons'

class LoginMenuButton extends Component {
    render(){
        const { disabled, handleNextButton, buttonLabel } = this.props
        const opacityStyle = disabled ? 0.2 : 1.0 
        return(
            <View style={styles.nextButton}>
                <TouchableHighlight style ={[{opacity: opacityStyle}, styles.button]}
                onPress={handleNextButton}
                disabled={disabled}
                >
                <Text style={[{opacity: opacityStyle},{color: Colors.primaryColors.white}, {alignText: 'center'}, FontStyles.text.buttons]}>{buttonLabel}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

module.exports = LoginMenuButton

LoginMenuButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
    buttonLabel: PropTypes.string,
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.primaryColors.white,
        width: 75,
        height: 75,
    },
    nextButton:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        marginTop: 20,
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
})