import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { useCallback } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainLogin from '../sections/MainLogin.js';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    tiltNeon: require('../fonts/TiltNeon-Regular.ttf'),
    rethinkSans: require('../fonts/RethinkSans-MediumItalic.ttf'),
    rethinkSansBold: require('../fonts/RethinkSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className='p-1 dark:bg-neutral-900'>
      <StatusBar style={colorScheme == 'dark' ? 'light' : 'dark'} />

      <View onLayout={onLayoutRootView}>
        <View className='my-5'>
          <MainLogin />
        </View>
      </View>
    </SafeAreaView>
  );
}
