import React, {Component} from 'react';
import { StyleSheet, Text, View,  TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import { Header, left, Right, Icon, Left } from 'native-base'

class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon : ({tintColor}) =>(
            <Icon name='home'  style={{
                fontSize:24, color: tintColor
            }}/>
        )
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 210, width:370, backgroundColor: 'steelblue'}} >
          <View style={{flex: 3, backgroundColor: 'powderblue', width: 360, height: 150,
              justifyContent: 'center',
              alignItems: 'center'}} >
              <TouchableHighlight
                      style = {{
                      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                      width: Dimensions.get('window').width * 0.5,
                      height: Dimensions.get('window').width * 0.5,
                      backgroundColor:'#f00',
                      justifyContent: 'center',
                      alignItems: 'center'
                      }}
                      underlayColor = '#ccc'
                      onPress = {() => this.props.navigation.navigate('Login')}
                  >
                      <Text> Imagen </Text>
                  </TouchableHighlight>
          </View>
        </View>
        <Header>
            <Left>
                <Icon name='book' onPress={()=>this.props.navigation.openDrawer()} />
            </Left>
        </Header>
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent:'center'
        }}

        >
            <Text>VISTA Noticias</Text>
        </View>
      </View>
    );
  }
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
