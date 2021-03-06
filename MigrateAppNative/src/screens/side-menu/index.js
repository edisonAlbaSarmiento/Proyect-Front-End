/* eslint-disable global-require */
import React from 'react';
import {View, ScrollView, SafeAreaView, Image} from 'react-native';
// import {
//   AntDesign,
//   MaterialCommunityIcons
// } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from '../../assets/icons/config-icons';

import {
  NavItem,
  NavItemText,
  ContainerIcon,
  ContainerFooter,
  ContainerSideMenu,
  ContainerIcons,
  ContainerTitleFooter,
  ContainerIconFooter,
  NavItemTextFooter,
} from './styles';

const SideMenuScreen = (props) => (
  <SafeAreaView
    styles={{
      flex: 1,
    }}>
    <View
      style={{
        height: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={require('../../../assets/logoPoli.png')} />
    </View>
    <ContainerSideMenu>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavItem onPress={() => props.navigation.navigate('Home')}>
          <NavItemText>Home</NavItemText>
          <ContainerIcon>
            <Icon name="home2" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem onPress={() => props.navigation.navigate('Profile')}>
          <NavItemText>Profile</NavItemText>
          <ContainerIcon>
            <Icon name="home2" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem onPress={() => props.navigation.navigate('Login')}>
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <Icon name="home2" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
      </ScrollView>
    </ContainerSideMenu>
    <ContainerFooter>
      <ContainerTitleFooter>
        <NavItemTextFooter>Por Edison Sigueme</NavItemTextFooter>
      </ContainerTitleFooter>
      <ContainerIcons>
        <ContainerIconFooter
          onPress={() =>
            props.navigation.navigate('WebViewAutor', {
              urlRedirect: 'https://github.com/edisonAlbaSarmiento',
            })
          }>
          <Icon name="home2" size={18} color="white" />
        </ContainerIconFooter>
        <ContainerIconFooter
          onPress={() =>
            props.navigation.navigate('WebViewAutor', {
              urlRedirect: 'https://www.instagram.com/edison_alba_s',
            })
          }>
          <Icon name="home2" size={18} color="white" />
        </ContainerIconFooter>
        <ContainerIconFooter
          onPress={() =>
            props.navigation.navigate('WebViewAutor', {
              urlRedirect: 'https://www.facebook.com/edison.albasarmiento/',
            })
          }>
          <Icon name="home2" size={18} color="white" />
        </ContainerIconFooter>
        <ContainerIconFooter
          onPress={() =>
            props.navigation.navigate('WebViewAutor', {
              urlRedirect:
                'https://co.linkedin.com/in/edison-jordan-alba-sarmiento-866799154',
            })
          }>
          <Icon name="home2" size={18} color="white" />
        </ContainerIconFooter>
      </ContainerIcons>
    </ContainerFooter>
  </SafeAreaView>
);

export default SideMenuScreen;
