import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Image,
    Modal,
    StyleSheet
} from 'react-native'
import {Colors} from '../../styles/'

class ActivityLoaderModal extends Component {
    render(){
        const {animationType, modalVisible} = this.props
        return (
            <Modal
            animationType={animationType}
            transparent
            visible={modalVisible}
            >
            <View style={styles.wrapper}>
                <View styles={styles.loaderContainer}>
                    <Image
                    style={styles.loaderImage}
                    source={require('../../assets/images/igenziAppHeaderLogo.png')}
                    />
                </View>
            </View>

            </Modal>
        )
    }
}

ActivityLoaderModal.propTypes = {
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
}
module.exports = ActivityLoaderModal

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 9,
        backgroundColor: Colors.primaryColors.charcoal,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    loaderContainer: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45,
    },
    loaderImage:{
        width: 70,
        height: 70,
        position: 'relative',
        left: '50%',
        marginLeft: -35,
        top: '50%',
        marginTop: -35,
    }
})