import React from 'react';
import {
  createAppContainer, createDrawerNavigator, createSwitchNavigator, createStackNavigator
} from 'react-navigation';
import {
  View, ScrollView, SafeAreaView, Image
} from 'react-native';
import News from '../screensOld/News';
import Events from '../screensOld/Events';
import Profile from '../screensOld/Profile';
import detailNews from '../ComponentsOld/DetailNews';
import detailEvents from '../ComponentsOld/DetailEvents';

// -------------- SPLASH
import SplashScreen from '../screens/splash';

import CustomDrawerComponent from '../components/side-menu';
// const AuthStack = createDrawerNavigator({
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: {
//       header: null,
//     },
//   },
// });

const AuthNavigator = createDrawerNavigator(
  createSwitchNavigator(
    {
      Splash: SplashScreen,
      // App: AppNavigator,
      // Auth: AuthStack,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);


const AppDrawerNavigator = createDrawerNavigator({
  Auth: AuthNavigator,
  Eventos: Events,
  Noticias: News,
  Perfil: Profile,
  PoliU: detailNews,
  Terminos: detailEvents

},
{
  initialRouteName: 'Auth',
},
{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'orange'
  }
});

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Navigation: AppDrawerNavigator,
    },
    {
      initialRouteName: 'Navigation',
      headerMode: 'none',
    },
  ),
);

export default AppContainer;
