import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        <Header>
            <Left>
                <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />
            </Left>
        </Header>
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent:'center'
        }}

        >
            <Text>VISTA HOME</Text>
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
