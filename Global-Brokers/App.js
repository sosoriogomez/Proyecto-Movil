import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Login from './src/pages/Login.js';
import Main from './src/pages/Main.js';

const Stack = createNativeStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Main' component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
