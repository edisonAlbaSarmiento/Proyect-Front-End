import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native';
import Login from './src/Components/Login'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import News from './src/screens/News'
import Events from './src/screens/Events'
import detailNews from './src/Components/DetailNews'
import detailEvents from './src/Components/DetailEvents'

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
      <Image source={require('./assets/logoPoli.png')}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
  Login: Login,
  Eventos: Events,
  Noticias: News,
  Perfil: detailNews,
  Terminos: detailEvents
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
