import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BrokersList from '../sections/BrokersList.js';
import Dashboard from '../sections/Dashboard.js';
import Header from '../sections/Hearder.js';

export default function Main() {
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
    <SafeAreaView className='p-6 dark:bg-neutral-900'>
      <StatusBar style={colorScheme == 'dark' ? 'light' : 'dark'} />

      <View onLayout={onLayoutRootView}>
        <View className='my-0'>
          <Header />
          <Dashboard />
          <BrokersList />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    width: '100%',
    paddingHorizontal: 50,
  },
});
