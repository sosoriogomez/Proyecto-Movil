import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Login from './src/pages/Login.js';
import Main from './src/pages/Main.js';
import Users from './src/pages/Users.js';

const Stack = createNativeStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Ingresar'>
        <Stack.Screen name='Ingresar' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Inicio' component={Main} options={{ headerShown: false }} />
        <Stack.Screen name='Usuarios' component={Users} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
