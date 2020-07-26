import { Platform, StyleSheet } from 'react-native'
import { robotoWeights, sanFranciscoWeights, systemWeights } from 'react-native-typography'

const fontStylesBaseWeights = StyleSheet.create({
  iosThin: {
    ...sanFranciscoWeights.thin,
  },
  iosUltralight: {
    ...sanFranciscoWeights.ultraLight,
  },
  iosLight: {
    ...sanFranciscoWeights.light,
  },
  iosRegular: {
    ...sanFranciscoWeights.regular,
  },
  iosMedium: {
    ...sanFranciscoWeights.medium,
  },
  iosSemiBold: {
    ...sanFranciscoWeights.semibold,
  },
  iosBold: {
    ...sanFranciscoWeights.bold,
  },
  iosHeavy: {
    ...sanFranciscoWeights.heavy,
  },
  iosBlack: {
    ...sanFranciscoWeights.black,
  },
  androidThin: {
    ...robotoWeights.thin,
  },
  androidLight: {
    ...robotoWeights.light,
  },
  androidRegular: {
    ...robotoWeights.regular,
  },
  androidMedium: {
    ...robotoWeights.medium,
  },
  androidCondensed: {
    ...robotoWeights.condensed,
  },
  androidCondensedBold: {
    ...robotoWeights.condensedBold,
  },
  androidBold: {
    ...robotoWeights.bold,
  },
})

const genericFontStyles = StyleSheet.create({
  regular: {
    ...Platform.select({
      ios: {
        ...sanFranciscoWeights.regular,
      },
      android: {
        ...robotoWeights.regular,
      },
      default: {
        ...systemWeights.regular,
      },
    }),
  },
  medium: {
    ...Platform.select({
      ios: {
        ...sanFranciscoWeights.medium,
      },
      android: {
        ...robotoWeights.medium,
      },
      default: {
        ...systemWeights.regular,
      },
    }),
  },
  semiBold: {
    ...Platform.select({
      ios: {
        ...sanFranciscoWeights.semibold,
      },
      android: {
        ...robotoWeights.condensedBold,
      },
      default: {
        ...systemWeights.semibold,
      },
    }),
  },
  bold: {
    ...Platform.select({
      ios: {
        ...sanFranciscoWeights.bold,
      },
      android: {
        ...robotoWeights.bold,
      },
      default: {
        ...systemWeights.bold,
      },
    }),
  },
  buttons: {
    ...Platform.select({
      ios: {
        ...sanFranciscoWeights.bold,
        fontSize: 12,
      },
      android: {
        ...robotoWeights.bold,
        fontSize: 12,
      },
      default: {
        ...systemWeights.bold,
        fontSize: 12,
      },
    }),
  },
})

const fontFamilies = StyleSheet.create({
  systemRegular: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  systemBold: {
    fontFamily: 'System',
    fontWeight: '700',
  },
})

export default {
  text: {
    title: genericFontStyles.medium,
    subtitle: genericFontStyles.regular,
    body: genericFontStyles.regular,
    buttons: genericFontStyles.buttons,
    labels: genericFontStyles.medium,
    input: genericFontStyles.regular,
    currency: genericFontStyles.bold,
  },
  generic: {
    regular: genericFontStyles.regular,
    medium: genericFontStyles.medium,
    semiBold: genericFontStyles.semiBold,
    bold: genericFontStyles.bold,
  },
  android: {
    thin: fontStylesBaseWeights.androidThin,
    light: fontStylesBaseWeights.androidLight,
    regular: fontStylesBaseWeights.androidRegular,
    medium: fontStylesBaseWeights.androidMedium,
    condensed: fontStylesBaseWeights.androidMedium,
    condensedBold: fontStylesBaseWeights.androidCondensedBold,
    bold: fontStylesBaseWeights.androidBold,
  },
  ios: {
    thin: fontStylesBaseWeights.iosThin,
    ultraLight: fontStylesBaseWeights.iosUltralight,
    light: fontStylesBaseWeights.iosLight,
    regular: fontStylesBaseWeights.iosRegular,
    medium: fontStylesBaseWeights.iosMedium,
    semiBold: fontStylesBaseWeights.iosSemiBold,
    bold: fontStylesBaseWeights.iosBold,
    heavy: fontStylesBaseWeights.iosHeavy,
    black: fontStylesBaseWeights.iosBlack,
  },
  fontFamilies: {
    systemRegular: fontFamilies.systemRegular,
    systemBold: fontFamilies.systemBold,
  },
}