import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator  } from 'react-native';
import { Header, Icon, Left, Card, CardItem, Item, Body, Input,Accordion } from 'native-base'
import ImageF from '../Images/fondoHeader.jpg'
import HeaderEntry from '../Components/Header'
import FooterVertical from '../Components/Footer'
import moment from 'moment'
import urlApi from '../../ConstIP'

class Profile extends Component {
    constructor(props){
      super(props);
      this.state ={ 
        data: '',
        dataProgram: '',
        isLoading: true
      }
    }
    static navigationOptions = {
        drawerIcon : ({tintColor}) =>(
            <Icon name='contact'  style={{
                fontSize:24, color: tintColor
            }}/>
        )
    }
    componentDidMount = async () => {
      
     fetch(`${urlApi}/users/1`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson
        })
      }).catch((error) =>{
        console.error(error);
      });
           
     fetch(`${urlApi}/dusersprograms?filter={"where":{"idUser":"1"}, "include":"program"}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataProgram: responseJson.map(item => (
          {
            title: item.program.name,
            content: item.program.description
          }
        ))
      })
    }).catch((error) =>{
      console.error(error);
    });
    }
  render() {
    const { data,dataProgram, isLoading } = this.state
    console.log('imagen antes https://bootdey.com/img/Content/avatar/avatar6.png', data)
    if(isLoading){
      return(
        <View style={{flex: 1, padding: 50}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
      <View  style={{backgroundImage: 'url(./Images/fondoHeader.jpg)'}}>
        <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{uri: data.imageUrl}}/>
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
                <Card style={{flex: 0}}>
                <CardItem header bordered>
                  <Text>Datos Personales</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                  <Text>Nombre</Text>
                  <Item disabled>
                    <Icon name='person' />
                    <Input disabled placeholder='Nombres' value={data.firstName}/>
                  </Item>
                  <Text>Apellidos</Text>
                  <Item disabled>
                    <Icon name='person' />
                    <Input disabled placeholder='Apellidos' value={data.secondName}/>
                  </Item>
                  {/* <Text>Telefono</Text>
                  <Item disabled>
                     <Icon name='home' />
                    <Input disabled keyboardType="numeric" placeholder='Telefono' value={data.phone}/>
                  </Item> */}
                  <Text>Email</Text>
                  <Item disabled>
                     <Icon name='mail' />
                    <Input disabled placeholder='email' value={data.email}/>
                  </Item>
                  <Text>Direccion</Text>
                  <Item disabled>
                     <Icon name='home' />
                    <Input disabled placeholder='Direccion' value={data.address}/>
                  </Item>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                <Text>Titulos Obtenidos</Text>
                </CardItem>
                <CardItem>
                  <Accordion dataArray={dataProgram} animation={true} icon="add" expandedIcon="remove" />
                </CardItem>
              </Card>
      </ScrollView>
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