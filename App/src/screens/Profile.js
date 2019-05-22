import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator  } from 'react-native';
import { Header, Icon, Left, Card, CardItem, Item, Body, Input,Content} from 'native-base'
import ImageF from '../Images/fondoHeader.jpg'
import HeaderEntry from '../Components/Header'
import FooterVertical from '../Components/Footer'
import moment from 'moment'

class Profile extends Component {
    constructor(props){
      super(props);
      this.state ={ 
        data: '',
        isLoading: true
      }
    }
    static navigationOptions = {
        drawerIcon : ({tintColor}) =>(
            <Icon name='paper'  style={{
                fontSize:24, color: tintColor
            }}/>
        )
    }
    componentDidMount = async () => {
      return fetch('http://192.168.20.60:8003/api/news/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => response.json())
      .then((responseJson) => {
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
    if(isLoading){
      return(
        <View style={{flex: 1, padding: 50}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
      <View  style={{backgroundImage: 'url(./Images/fondoHeader.jpg)'}}>
        <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
        </View>
      </View>
      <Header style={{display: 'flex', alignItems:'center', backgroundColor: '#0F385A'}}>
          <View style={{flex: 2}}>
          <Icon name='menu' style={{color:'white'}} onPress={()=>this.props.navigation.openDrawer()} />
          </View>
          <View style={{flex: 3}}>
            <Text style={{color: 'white'}}> Perfil </Text>
          </View>
        </Header>
        <ScrollView>
        {data.map((item, i) => (
            <View key={i}>
                <Card style={{flex: 0}}>
                <CardItem header bordered>
                  <Text>Datos Personales</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                  <Item disabled>
                    <Icon name='information-circle' />
                    <Input disabled placeholder='Nombre'/>
                  </Item>
                  <Item disabled>
                     <Icon name='information-circle' />
                    <Input disabled placeholder='Telefono'/>
                  </Item>
                  <Item disabled>
                     <Icon name='information-circle' />
                    <Input disabled placeholder='email'/>
                  </Item>
                  <Item disabled>
                     <Icon name='information-circle' />
                    <Input disabled placeholder='Direccion'/>
                  </Item>
                  <Item disabled>
                     <Icon name='information-circle' />
                    <Input disabled placeholder='Disabled Textbox'/>
                  </Item>
                  <Item disabled>
                     <Icon name='information-circle' />
                    <Input disabled placeholder='Disabled Textbox'/>
                  </Item>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                <Text>Titulos Obtenidos</Text>
              </CardItem>
                <CardItem>
                  <Item disabled>
                    <Input disabled placeholder='Disabled Textbox'/>
                    <Icon name='information-circle' />
                  </Item>
                </CardItem>
 
              </Card>
            </View>
          ))}
        </ScrollView> 
  </View>
    );
  }
}
export default Profile

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});