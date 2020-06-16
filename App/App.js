import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Login from './src/ComponentsOld/Login';
import News from './src/screensOld/News';
import Events from './src/screensOld/Events';
import Profile from './src/screensOld/Profile';
import detailNews from './src/ComponentsOld/DetailNews';
import detailEvents from './src/ComponentsOld/DetailEvents';
import { SplashScreen, LoginScreen, HomeScreen } from './src/screens';
import CustomDrawerComponent from './src/components/side-menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Splash: SplashScreen,
  Login: LoginScreen,
  Home: HomeScreen,
  Eventos: Events,
  Noticias: News,
  Perfil: Profile,
  PoliU: detailNews,
  Terminos: detailEvents,
  Salir: Login,
},
{
  initialRoute: 'Splash'
},
{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'orange'
  }
});

export default App;
