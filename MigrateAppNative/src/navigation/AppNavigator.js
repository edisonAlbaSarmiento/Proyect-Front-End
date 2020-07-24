import React from 'react';

import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  DetailDategorieScreen,
  SideMenuScreen,
  ProfileScreen,
  WebViewAutorScreen,
} from '../screens';

const screens = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Profile: {
    screen: ProfileScreen,
  },
  WebViewAutor: {
    screen: WebViewAutorScreen,
  },
  DetailDategorie: {
    screen: DetailDategorieScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const App = createDrawerNavigator(
  {
    screens,
  },
  {
    // contentComponent: CustomDrawerComponent,
    contentComponent: ({navigation}) => (
      <SideMenuScreen navigation={navigation} />
    ),
    contentOptions: {
      activeTintColor: '#00b075',
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
  },
);

const AuthNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
      drawerLockMode: 'locked-closed',
    },
  },
  // Home: {
  //   screen: App,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
});
export default AuthNavigator;
