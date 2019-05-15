import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native';
import { Header, Icon, Left, Card, CardItem, Thumbnail, Body, Button, Right, Footer, FooterTab} from 'native-base'
import HeaderEntry from '../Components/Header'

class Events extends Component {
    constructor(props){
      super(props);
      this.state ={ 
        data: '',
        isLoading: true
      }
    }

    static navigationOptions = {
        drawerIcon : ({tintColor}) =>(
            <Icon name='home'  style={{
                fontSize:24, color: tintColor
            }}/>
        )
    }
    componentDidMount = async () => {
      return fetch('http://10.10.0.28:8000/api/events/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson',responseJson)
        this.setState({
          isLoading: false,
          data: responseJson
        })
      }).catch((error) =>{
        console.error(error);
      });
    }
  render() {
    const { data, isLoading } = this.state
    console.log('data render', data)
    if(isLoading){
      return(
        <View style={{flex: 1, padding: 50}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <HeaderEntry/>
        <Header style={{display: 'flex', alignItems:'center', backgroundColor: '#0F385A' }}>
          <View style={{flex: 1}}>
          <Icon name='book' style={{color: 'white'}} onPress={()=>this.props.navigation.openDrawer()} />
          </View>
          <View style={{flex: 2}}>
            <Text style={{color: 'white'}}> Eventos </Text>
          </View>
        </Header>
        <ScrollView>
          {data.map((item, i) => (
            <View key={i}>
               {console.log('item', item.name)}
                <Card style={{flex: 0}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('../../assets/logoPoli.png')} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.create_at}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body style={{display: 'flex', alignItems:'center' }}>
                    <Image source={require('../../assets/logoPoli.png')} style={{ justifyContent: 'center',
                      alignItems: 'center', height: 240, width: 320, flex: 1}}
                    />
                    <Text>
                      {item.short_description}
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
            </View>
          ))}
        </ScrollView>
        <Footer style={{display: 'flex', alignItems:'center', backgroundColor: '#0F385A'}}>
        <FooterTab>
            <Button vertical
              onPress = {() => this.props.navigation.navigate('Noticias')}
            >
              <Icon active name="navigate" />
              <Text>Noticias</Text>
            </Button>
            <Button vertical active
              onPress = {() => this.props.navigation.navigate('Eventos')}
            >
              <Icon name="person" />
              <Text>Eventos</Text>
            </Button>
          </FooterTab>
        </Footer>
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
