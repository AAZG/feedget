import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { theme } from './src/theme';
import Widget  from './src/components/Widget';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { Navigation } from './src/navigation/navigation';

// export default function App() {
//   SplashScreen.preventAutoHideAsync();
//   const [fontsLoaded] = useFonts({
//     Inter_400Regular,
//     Inter_500Medium,
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   SplashScreen.hideAsync();
  
//   return (
//     <View style={{
//       flex: 1,
//       backgroundColor: theme.colors.background,
//     }}>
//       <StatusBar
//         style="light"
//         backgroundColor='transparent'
//         translucent
//       />
//       <Widget />
//     </View>
//   );
// }

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  };

  SplashScreen.hideAsync();

  return (
    <Navigation></Navigation>
  );
}