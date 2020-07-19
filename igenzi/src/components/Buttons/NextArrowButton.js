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

class NextArrowButton extends Component {
    render(){
        const { disabled, handleNextButton } = this.props
        const opacityStyle = disabled ? 0.2 : 1.0 
        return(
            <View style={styles.nextButton}>
                <TouchableHighlight style ={[{opacity: opacityStyle}, styles.button]}
                onPress={handleNextButton}
                disabled={disabled}
                >
                <Ionicons
                    name = "md-arrow-forward"
                    color={Colors.primaryColors.white}
                    size={32}
                    style={styles.icon}
                />
                </TouchableHighlight>
                <Text style={[{opacity: opacityStyle},{color: Colors.primaryColors.white}, FontStyles.text.buttons]}>NEXT</Text>
            </View>
        )
    }
}

module.exports = NextArrowButton

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.primaryColors.white,
        width: 60,
        height: 60,
        marginRight: 10,
    },
    nextButton:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: 20,
        marginTop: 20,
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
})