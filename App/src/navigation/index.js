// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/display-name */
// import React from 'react';

// // Importers: Dependencies
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// import CustomTabBar from '../components/bottom-tab-bar-custom/custom-tab-bar';

// // Importers: components
// import TabBarIcon from '../components/bottom-tab-bar-custom/TabBarIcon';

// // Importers: stacks
// import WalletStack from './wallet-stack';
// import HomeStack from './home-stack';
// import EntertainmentStack from './entertainment-stack';
// import MobilityStack from './mobility-stack';

// // #region  Importers: Screens
// import SideMenu from '../screens/side-menu';

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
// };

// WalletStack.navigationOptions = {
//   tabBarLabel: 'Billetera',
//   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="card" />,
// };

// EntertainmentStack.navigationOptions = {
//   tabBarLabel: 'Disfruta',
//   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="enjoy" />,
// };

// MobilityStack.navigationOptions = {
//   tabBarLabel: 'Muévete',
//   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="trips" />,
//   tabBarVisible: false,
// };

// // Declaration Screens in Stack
// const AppBottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Billetera: WalletStack,
//     Disfruta: EntertainmentStack,
//     Muevete: MobilityStack,
//   },
//   {
//     initialRouteName: 'Home',
//     // tabBarComponent: props => <CustomTabBar {...props} />,
//   },
// );

// const AppNavigator = createDrawerNavigator(
//   {
//     AppTabs: AppBottomTabNavigator,
//   },
//   {
//     drawerWidth: '100%',
//     initialRouteName: 'AppTabs',
//     contentComponent: ({ navigation }) => <SideMenu navigation={navigation} />,
//   },
// );

// export default AppNavigator;
