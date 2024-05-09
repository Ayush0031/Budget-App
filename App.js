/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {persistor, store}  from './src/components/redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AddItem from './src/components/AddItem';
import Display from './src/components/DisplayItems';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();


export default function App(){

  
  return(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MyApp' component={AddItem} />
        <Stack.Screen name="Display" component={Display} />
      </Stack.Navigator>
    </NavigationContainer>
  </PersistGate>
  </Provider>
  
  )

}
const styles=StyleSheet.create({
  container:{
    backgroundColor: 'aliceblue',
    
    
  }
  
})

