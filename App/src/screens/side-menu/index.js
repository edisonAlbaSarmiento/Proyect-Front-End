/* eslint-disable global-require */
import React from 'react';
import {
  View, ScrollView, SafeAreaView, Image
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavItem, NavItemText, ContainerIcon } from './styles';

const SideMenuScreen = (props) => (
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
      <NavItem
        onPress={() => props.navigation.navigate('Login')}
      >
        <NavItemText>Salir</NavItemText>
        <ContainerIcon>
          <AntDesign name="logout" size={24} color="black" />
        </ContainerIcon>
      </NavItem>
      {/* <DrawerItems {...props} /> */}
    </ScrollView>
  </SafeAreaView>
);

export default SideMenuScreen;
