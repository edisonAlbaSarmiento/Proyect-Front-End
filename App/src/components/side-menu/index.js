import React from 'react';
import {
  View, ScrollView, SafeAreaView, Image
} from 'react-native';
import { DrawerItems } from 'react-navigation';

const CustomDrawerComponent = (props) => (
  <SafeAreaView styles={{
    flex: 1
  }}
  >
    <View style={{
      height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'
    }}
    >
      <Image source={require('../../../assets/logoPoli.png')} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default CustomDrawerComponent;
