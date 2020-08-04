import {createStackNavigator} from 'react-navigation-stack';
import {LoginScreen} from '../screens';

const AuthNavigation = createStackNavigator(
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

export default AuthNavigation;
