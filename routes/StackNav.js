import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './Tabs';
import Details from '../components/Details'


const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
     screenOptions={{
         headerShown: false
     }}
    >
      <Stack.Screen name='Homepage' component={Tabs} />
      <Stack.Screen name='Détail' component={Details} />
    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({})

export default StackNav