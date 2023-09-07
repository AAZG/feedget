import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../theme';
import Widget  from '../components/Widget';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

export default function ContactScreen() {
  // SplashScreen.hideAsync();
    
  return (
    <View style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
        <Text style={styles.steelblue}>Contact!</Text>
        <StatusBar
          style="light"
          backgroundColor='transparent'
          translucent
        />
        <Widget />
      </View>
  )
}

const styles = StyleSheet.create({
    steelblue: {
        color: "steelblue",
    },
    });