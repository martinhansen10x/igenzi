/**
 * Igenzi App Blank Page
 * 
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './navigation/RootNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import AuthIndex from './modules/Auth/AuthIndex'
import SMS2FA from './modules/Auth/SMS2FA'
import PinCode from './modules/Auth/Pincode'
import TribesLanding from './modules/Tribes/TribesLanding'

const Stack = createStackNavigator()

function App() {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="AuthIndex" component={AuthIndex} options={{headerShown: false}} />
        <Stack.Screen name="SMS2FA" component={SMS2FA} options={{headerShown: false}} />
        <Stack.Screen name="PinCode" component={PinCode} options={{headerShown: false}} />
        <Stack.Screen name="TribesLanding" component={TribesLanding} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App
