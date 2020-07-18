import { Dimensions, Platform } from 'react-native'

const screen = Dimensions.get('window')

export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

export const isIPhoneXSize = screen.height === 812 || screen.width === 812
export const isIPhoneXrSize = screen.height === 896 || screen.width === 896
export const isIPhoneX = Platform.OS === 'ios' && (isIPhoneXSize || isIPhoneXrSize)

export const isBiggerScreen = screen.width > 320

export default {
  screenWidth: screen.width,
  screenHeight: screen.height,
  screenRatio: screen.height / screen.width,
  margins: {
    small: 5,
    normal: 10,
    large: 15,
    double: 20,
  },
  isIOS,
  isAndroid,
  isIPhoneX,
  isBiggerScreen,
}