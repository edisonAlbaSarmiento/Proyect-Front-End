import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Dimensions, ScrollView,Image } from 'react-native';
import { Button } from 'react-native-material-ui';
import { Container, Header, Content, Item, Input, Icon, CardItem } from 'native-base';
import HeaderEntry from '../Header'
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { textUserName: '', textPassword: '' };
        }
        
render(){
    return(
    <ScrollView>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          <HeaderEntry/>
          <View style={{ flex: 1, height: 50, backgroundColor: '#0F385A'}} >
                <Text style={{textAlign:'center', padding: 8, color: 'white'}}> Bienvenidos Egresados </Text>
          </View>
          <View style={{height: 290, alignItems:'center',justifyContent:'center',padding: 3}} >
                <View style={{
                  padding: 15
                }}>
                  <Item style={{
                    width:200, height: 40, backgroundColor:'#9ba2b0'
                  }} rounded> 
                    <Icon active name='contact' />
                    <Input placeholder='Usuario' 
                    onChangeText={(textUserName) => this.setState({textUserName})}
                    value={this.state.textUserName}
                    />
                  </Item>
                </View>
                <View style={{
                  padding: 5
                }}>
                  <Item style={{
                    width:200, height: 40, backgroundColor:'#9ba2b0'
                  }} rounded> 
                    <Icon active name='lock' />
                    <Input placeholder='Contraseña' 
                    secureTextEntry={true}
                    onChangeText={(textPassword) => this.setState({textPassword})}
                    value={this.state.textPassword}
                    />
                  </Item>
                </View>
                <View>
                  <Button raised primary text="Ingresar" onPress = {() => this.props.navigation.navigate('Noticias')} />
                </View>

                <View style={{flex: 1}}>
          <CardItem button onPress={() => alert("Validar contraseña")}>
                    <Text>Olvido su Contraseña</Text>
                  </CardItem>
                  </View>
          <View style={{flex: 1, flexDirection:'row',justifyContent: 'space-between'}}>
            <View style={{padding: 5}}>
              <CardItem button onPress={() => alert("Terminos y Condiciones")}>
                <Text>Terminos y Condiciones</Text>
              </CardItem>
            </View >
            <View style={{padding: 5}}>
              <CardItem button onPress={() => alert("Politicas de Privacidad")}>
                <Text>Politicas de Privacidad</Text>
              </CardItem>
          </View>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection:'row',height: 150, backgroundColor: '#0F385A', padding: 15, textAlign: 'center'}} >
            <View style={{flex: 1}}>
              <Image source={{uri: 'https://www.poli.edu.co/sites/default/files/logos/logo_poli_nuevo_footer-ver5.png'}} style={{width: 180, height: 100, resizeMode: 'contain'}}/>
            </View>
            <View style={{flex: 1}}>
              <Image source={{uri: 'https://www.poli.edu.co/sites/default/files/logos/icontec9001-a1.png'}} style={{width: 180, height: 100, resizeMode: 'contain'}}/>
            </View>
          </View>
        </View>
    </ScrollView>
    )
    }
}

export default Login