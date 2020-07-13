/* eslint-disable global-require */
import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Image
} from 'react-native';
import {
  AntDesign,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import {
  NavItem,
  NavItemText,
  ContainerIcon,
  ContainerFooter,
  ContainerSideMenu,
  ContainerIcons,
  ContainerTitleFooter
} from './styles';


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
    <ContainerSideMenu>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavItem
          onPress={() => props.navigation.navigate('Home')}
        >
          <NavItemText>Home</NavItemText>
          <ContainerIcon>
            <AntDesign name="home" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Profile')}
        >
          <NavItemText>Profile</NavItemText>
          <ContainerIcon>
            <MaterialCommunityIcons name="face-profile" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>
        <NavItem
          onPress={() => props.navigation.navigate('Login')}
        >
          <NavItemText>Salir</NavItemText>
          <ContainerIcon>
            <AntDesign name="logout" size={18} color="#00b075" />
          </ContainerIcon>
        </NavItem>

      </ScrollView>
    </ContainerSideMenu>
    <ContainerFooter>
      <ContainerTitleFooter>
        <NavItemText>Sigueme</NavItemText>
      </ContainerTitleFooter>
      <ContainerIcons>
        <ContainerIcon>
          <AntDesign name="logout" size={18} color="#00b075" />
        </ContainerIcon>
        <ContainerIcon>
          <AntDesign name="logout" size={18} color="#00b075" />
        </ContainerIcon>
        <ContainerIcon>
          <AntDesign name="logout" size={18} color="#00b075" />
        </ContainerIcon>
        <ContainerIcon>
          <AntDesign name="logout" size={18} color="#00b075" />
        </ContainerIcon>
      </ContainerIcons>
    </ContainerFooter>
  </SafeAreaView>
);

export default SideMenuScreen;
