import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Header, left, Right, Icon, Left
} from 'native-base';

const CustomDrawerComponent = (props) => (
  <SafeAreaView styles={{
    flex: 1
  }}
  >
    <View style={{
      height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'
    }}
    >
      <Image
        source={require('./assets/logoPoli.png')}
        style={{
          height: 120, width: 120, borderRadius: 60
        }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>

  </SafeAreaView>
);
const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'orange'
  }
});
export default CustomDrawerComponent;
