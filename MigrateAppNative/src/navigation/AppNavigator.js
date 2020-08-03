import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  DetailDategorieScreen,
  SideMenuScreen,
  ProfileScreen,
  WebViewAutorScreen,
} from '../screens';
import withTheme from 'styled-components';

const screens = createStackNavigator(
  {
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
  },
  {initialRouteName: 'Home'},
);

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

const Auth = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
        drawerLockMode: 'locked-closed',
      },
    },
  },
  {initialRouteName: 'Login'},
);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      Main: SplashScreen,
      Auth,
      App,
    },
    {initialRouteName: 'Main'},
  ),
);

export default Navigation;
