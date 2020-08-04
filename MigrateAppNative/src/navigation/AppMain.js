import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  HomeScreen,
  DetailDategorieScreen,
  SideMenuScreen,
  ProfileScreen,
  WebViewAutorScreen,
} from '../screens';

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

const AppMain = createDrawerNavigator(
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

export default AppMain;
