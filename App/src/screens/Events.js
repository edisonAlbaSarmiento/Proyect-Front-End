import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Header, Icon, Left, Card, CardItem, Thumbnail, Body, Button, Right } from 'native-base'
import HeaderEntry from '../Components/Header'

class Events extends Component {
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
        <HeaderEntry/>
        <Header>
            <Left>
                <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />
            </Left>
        </Header>
        <ScrollView>
          <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{url: '../../assets/icon.png'}} />
                  <Body>
                    <Text>Evento</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{url: '../../assets/icon.png'}} style={{height: 20, width: 20, flex: 1}}/>
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
                <Right>
                  <Button transparent textStyle={{color: '#87838B'}} onPress = {() => this.props.navigation.navigate('Noticias')} >
                    <Icon name="add" />
                    <Text>1,926 stars</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{url: '../../assets/icon.png'}} />
                  <Body>
                    <Text>Titulo de la Evento</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{url: '../../assets/icon.png'}} style={{height: 20, width: 20, flex: 1}}/>
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
                <Right>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="add" />
                    <Text>1,926</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
        </ScrollView>
      </View>
    );
  }
}
export default Events

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
