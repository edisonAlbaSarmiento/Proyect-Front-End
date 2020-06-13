import React from 'react';
import { createDrawerNavigator, createSwitchNavigator, DrawerItems } from 'react-navigation';
import {
  View, ScrollView, SafeAreaView, Image
} from 'react-native';
import News from '../screensOld/News';
import Events from '../screensOld/Events';
import Profile from '../screensOld/Profile';
import detailNews from '../ComponentsOld/DetailNews';
import detailEvents from '../ComponentsOld/DetailEvents';

// -------------- SPLASH
import { SplashScreen, LoginScreen } from '../screens';

const AuthStack = createDrawerNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const AuthNavigator = createDrawerNavigator(
  createSwitchNavigator(
    {
      Splash: SplashScreen,
      // App: AppNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);


const CustomDrawerComponent = (props) => (
  <SafeAreaView styles={{
    flex: 1
  }}
  >
    <View style={{
      height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'
    }}
    >
      <Image source={require('../../assets/logoPoli.png')} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
  Auth: AuthNavigator,
  Eventos: Events,
  Noticias: News,
  Perfil: Profile,
  PoliU: detailNews,
  Terminos: detailEvents

}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'orange'
  }
});


export default <AppDrawerNavigator />;
