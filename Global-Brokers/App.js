import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Body, Container, Content, Header } from 'native-base';
import * as React from 'react';
import { GlobeAmericasIcon } from 'react-native-heroicons/solid';
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import InfoUser from './src/pages/InfoUser.js';
import Login from './src/pages/Login.js';
import Main from './src/pages/Main.js';
import Users from './src/pages/Users.js';

const Stack = createNativeStackNavigator();

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <View style={{ flexDirection: 'row' }}>
          <GlobeAmericasIcon style={styles.drawerImage} />
          <Text style={{ marginLeft: 20, alignContent: 'center', alignSelf: 'center' }}>User name</Text>
        </View>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Inicio: {
      screen: Main,
    },
    Usuarios: {
      screen: Users,
    },
    CerrarSesion: {
      screen: Login,
    },
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'FirstScreen',
    drawerBackgroundColor: 'white',
    drawerWidth: 200,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: '#2EB6AE',
      inactiveTintColor: '#939393',
    },
  }
);

const RootNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationBarStyle: { navBarHidden: true },
    navigationOptions: {
      headerShown: false,
    },
  },
  AfterLogin: {
    screen: MyDrawerNavigator,
    navigationBarStyle: { navBarHidden: true },
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default function App(navigation, RootNavigator) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Ingresar'>
        <Stack.Screen name='Log Out' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Inicio' component={Main} options={{ headerShown: false }} />
        <Stack.Screen name='Usuarios' component={Users} options={{ headerShown: false }} />
        <Stack.Screen name='Info Usuario' component={InfoUser} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerHeader: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  drawerImage: {
    height: 50,
    width: 50,
    borderRadius: 75,
  },
});
