import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {SplashScreen} from '../screens';
import AppMain from './AppMain';
import AuthNavigation from './AuthNavigation';

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      Main: SplashScreen,
      Auth: AuthNavigation,
      App: AppMain,
    },
    {initialRouteName: 'Main'},
  ),
);

export default Navigation;
