import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image  } from 'react-native';
import { Header, Icon, Left, Card, CardItem, Thumbnail, Body, Button, Right } from 'native-base'
import ImageF from '../Images/fondoHeader.jpg'
import HeaderEntry from '../Components/Header'

class News extends Component {
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
        <HeaderEntry />
        <Header style={{display: 'flex', alignItems:'center', backgroundColor: '#0F385A'}}>
          <View style={{flex: 1}}>
          <Icon name='book' style={{color:'white'}} onPress={()=>this.props.navigation.openDrawer()} />
          </View>
          <View style={{flex: 2}}>
            <Text style={{color: 'white'}}> Noticias </Text>
          </View>
        </Header>
        <ScrollView>
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../assets/logoPoli.png')} />
                  <Body>
                    <Text>Noticias</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body style={{display: 'flex', alignItems:'center' }}>
                  <Image source={require('../../assets/logoPoli.png')} style={{ justifyContent: 'center',
                    alignItems: 'center', height: 240, width: 320, flex: 1}}
                  />
                  <Text>
                    Your text here
                    Your text here
                    Your text here
                    Your text here
                    Your text here
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Right style={{flex: 1}}>
                  <Button textStyle={{color: '#87838B'}} onPress = {() => this.props.navigation.navigate('Noticias')}>
                    <Text>Ver más</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../assets/logoPoli.png')} />
                  <Body>
                    <Text>Noticias</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body style={{display: 'flex', alignItems:'center' }}>
                  <Image source={require('../../assets/logoPoli.png')} style={{ justifyContent: 'center',
                    alignItems: 'center', height: 240, width: 320, flex: 1}}
                  />
                  <Text>
                    Your text here
                    Your text here
                    Your text here
                    Your text here
                    Your text here
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Right style={{flex: 1}}>
                  <Button textStyle={{color: '#87838B'}} onPress = {() => this.props.navigation.navigate('Noticias')}>
                    <Text>Ver más</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
        </ScrollView>    
      </View>
    );
  }
}
export default News

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
