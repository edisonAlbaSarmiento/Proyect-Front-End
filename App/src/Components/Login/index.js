import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Dimensions, ScrollView,Image } from 'react-native';
import { Button } from 'react-native-material-ui';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

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
          <View style={{height: 210, width:370, backgroundColor: 'steelblue'}} >
          <View style={{flex: 3, backgroundColor: 'powderblue', width: 360,
                justifyContent: 'center',
                alignItems: 'center'}} >
                <TouchableHighlight
                        style = {{
                        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                        width: Dimensions.get('window').width * 0.5,
                        height: Dimensions.get('window').width * 0.5,
                        backgroundColor:'white',
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}
                        underlayColor = '#ccc'
                        onPress = {() => this.props.navigation.navigate('Noticias')}
                    >
                      <Image source={require('../../../assets/logoPoli.png')}
                      />
                    </TouchableHighlight>
            </View>
          </View>
          <View style={{ flex: 1, height: 50, backgroundColor: '#0F385A'}} >
                <Text style={{textAlign:'center', padding: 8, color: 'white'}}> Bienvenidos Egresados </Text>
          </View>
          <View style={{height: 190, alignItems:'center',justifyContent:'center',padding: 3}} >
                <View style={{
                  padding: 3
                }}>
                  <Item style={{
                    width:150, height: 40, backgroundColor:'grey'
                  }} rounded> 
                    <Icon active name='home' />
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
                    width:150, height: 40, backgroundColor:'grey'
                  }} rounded> 
                    <Icon active name='car' />
                    <Input placeholder='Contraseña' 
                    secureTextEntry={true}
                    onChangeText={(textPassword) => this.setState({textPassword})}
                    value={this.state.textPassword}
                    />
                  </Item>
                </View>
                <View>
                  <Button raised primary text="Primary" />
                </View>
            <Text>Olvido su Contraseña</Text>
          <View style={{flex: 1, flexDirection:'row',justifyContent: 'space-between'}}>
            <View style={{padding: 5}}>
                <Text>Terminos y Condiciones</Text>

            </View >
            <View style={{padding: 5}}>
                <Text>Politicas de Privacidad</Text>
          </View>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection:'row',height: 150, backgroundColor: '#0F385A', padding: 15}} >
            <View style={{flex: 3}}>
              <Text style={{color: 'white'}}>CXXXX</Text>

            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'white'}}>CXXXX</Text>

            </View>
          </View>
        </View>
    </ScrollView>
    )
    }
}

export default Login