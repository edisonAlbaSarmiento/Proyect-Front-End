import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native';
import Login from './src/Components/Login'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'


export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerComponent  = (props) => (
  <SafeAreaView styles={{
    flex:1
  }}>
    <View style={{
      height:150,  backgroundColor: 'white',  alignItems: 'center', justifyContent: 'center'
    }}>
      <Image source={require('./assets/logoPoli.png')} style={{
        height: 120, width: 120, borderRadius: 60
      }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  
  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
},{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'orange'
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
