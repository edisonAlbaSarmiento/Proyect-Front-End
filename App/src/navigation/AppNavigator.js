// import { createDrawerNavigator } from 'react-navigation';

// import WelcomeAuthNavigator from './WelcomeAuthNavigator';
// import MainTabNavigator from './MainTabNavigator';
// import MainDrawerNavigator from './MainDrawerNavigator';
// import Drawer from '../screens/drawers/Drawer';

// export default createDrawerNavigator({
//     WelcomeAuth: WelcomeAuthNavigator,
//     Drawer: MainDrawerNavigator,
//     Main: MainTabNavigator
// }, {
//   initialRouteName: 'WelcomeAuth',
//   contentComponent: CustomDrawerComponent,
//   drawerWidth: 180
// });
import React from 'react';


import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  DetailDategorieScreen,
  SideMenuScreen,
  ProfileScreen,
} from '../screens';

const screens = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null
      },
    },
    DetailDategorie: {
      screen: DetailDategorieScreen,
      navigationOptions: {
        header: null
      }
    },
  }
);

// import { createDrawerNavigator } from 'react-navigation';
// import Login from './src/ComponentsOld/Login';
// import News from './src/screensOld/News';
// import Events from './src/screensOld/Events';
// import Profile from './src/screensOld/Profile';
// import detailNews from './src/ComponentsOld/DetailNews';
// import detailEvents from './src/ComponentsOld/DetailEvents';
// import {
//   SplashScreen, LoginScreen, HomeScreen, DetailDategorieScreen
// } from './src/screens';
// const AppDrawerNavigator = createDrawerNavigator({
//   Splash: SplashScreen,
//   Home: HomeScreen,
//   DetailDategorie: DetailDategorieScreen,
//   Login: LoginScreen,
//   Eventos: Events,
//   Noticias: News,
//   Perfil: Profile,
//   PoliU: detailNews,
//   Terminos: detailEvents,
//   Salir: Login,
// },
// {
//   contentComponent: CustomDrawerComponent,
//   contentOptions: {
//     activeTintColor: 'orange'
//   }
// });
const App = createDrawerNavigator({
  screens
}, {
  // contentComponent: CustomDrawerComponent,
  contentComponent: ({ navigation }) => <SideMenuScreen navigation={navigation} />,
  contentOptions: {
    activeTintColor: '#00b075'
  },
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose'
});


const AuthNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
        drawerLockMode: 'locked-closed'
      },
    },
    Home: {
      screen: App,
      navigationOptions: {
        header: null
      },
    },
  }
);
export default AuthNavigator;
