/**
 * @format
 */

import {AppRegistry} from 'react-native'
import 'react-native-gesture-handler'
import App from './src/App'
import {name as appName} from './app.json'

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App)
