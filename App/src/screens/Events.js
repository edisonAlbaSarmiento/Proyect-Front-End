import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image, ToastAndroid } from 'react-native';
import { Header, Icon, Left, Card, CardItem, Thumbnail, Body, Button, Right, Footer, FooterTab, Badge} from 'native-base'
import HeaderEntry from '../Components/Header'
import moment from 'moment'
import urlApi from '../../ConstIP'

const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50,
    );
    return null;
  }
  return null;
};

class Events extends Component {
    constructor(props){
      super(props);
      this.state ={ 
        data: [],
        isLoading: true
      }
    }

    static navigationOptions = {
        drawerIcon : ({tintColor}) =>(
            <Icon name='calendar'  style={{
                fontSize:24, color: tintColor
            }}/>
        )
    }
    componentDidMount = async () => {
      return fetch(`${urlApi}/events/`, {
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
          data: responseJson.reverse()
        })
      }).catch((error) =>{
        console.error(error);
      });
    }
  render() {
    const { data, isLoading } = this.state
    const dataNew = data.filter(data => (data.status === 0))

    console.log('data render', data)
    console.log('dataNew', dataNew.length)
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
          <Icon name='menu' style={{color: 'white'}} onPress={()=>this.props.navigation.openDrawer()} />
          </View>
          <View style={{flex: 2}}>
            <Text style={{color: 'white'}}> Eventos </Text>
          </View>
        </Header>
        <ScrollView>
          {data.map((item, i) => (
            <View key={i}>
                <Card style={{flex: 0}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('../../assets/logoPoli.png')} style={{resizeMode: 'contain'}} />
                    <Body>
                    {item.status === 0 ?
                      <View>
                      <Text style={{color: "red"}}>Nuevo Evento </Text>
                      <Text>{item.name}</Text>
                      <Toast visible={true} message="EVENTOS NUEVOS" />
                    </View>
                    :
                    <Text>{item.name}</Text>
                    }
                      <Text note>{moment(item.created_at).format("YYYY-MM-DD")}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body style={{display: 'flex', alignItems:'center' }}>
                    <Image source={{uri: item.imagenUrl !== "" ? item.imagenUrl : 'https://www.poli.edu.co/sites/default/files/logos/logo-poli-politecnico-grancolombiano2018.png' }} style={{ justifyContent: 'center',
                      alignItems: 'center', height: 240, width: 320, flex: 1, resizeMode: 'contain'}}
                    />
                    <Text>
                      {item.short_description}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Right style={{flex: 1}}>
                    <Button style={{backgroundColor: '#0F385A', width: 100, justifyContent: 'center'}} onPress = {() => this.props.navigation.navigate('Terminos', { info: item })}>
                      <Text style={{color: 'white'}}>Ver más</Text>
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
              style={{backgroundColor: '#0F385A'}}
              onPress = {() => this.props.navigation.navigate('Noticias')}
            >
              <Icon active name="paper" />
              <Text style={{color: 'white'}}>Noticias</Text>
            </Button>
            <Button vertical active
              style={{backgroundColor: '#0F385A'}}
              onPress = {() => this.props.navigation.navigate('Eventos')}
            >
              {dataNew.length === 0 ? null : <Badge ><Text style={{color: "white"}}>{dataNew.length}</Text></Badge> }
              <Icon name="calendar" />
              <Text style={{color: 'white'}}>Eventos</Text>
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
