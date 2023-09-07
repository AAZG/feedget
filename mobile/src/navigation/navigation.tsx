import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '../types/navigationTypes';
import ContactScreen from '../screens/contactScreen';
import HomeScreen from '../screens/homeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={Routes.home} component={HomeScreen} />
            <Stack.Screen name={Routes.contact} component={ContactScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

