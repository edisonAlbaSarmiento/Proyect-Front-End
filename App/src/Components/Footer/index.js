import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-material-ui';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = { textUserName: 'Usuario', textPassword: 'Contraseña' };
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
                        onPress = { () => alert('Yaay!') }
                    >
                        <Text> Imagen </Text>
                    </TouchableHighlight>
            </View>
          </View>
          <View style={{ flex: 1, height: 50, backgroundColor: 'red'}} >
                <Text style={{textAlign:'center', padding: 8, color: 'white'}}> Bienvenidos HOME </Text>
          </View>
          <View style={{height: 100, backgroundColor: 'green', alignItems:'center',justifyContent:'center'}} >
          <TextInput
                    style={{width:150,borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(textUserName) => this.setState({textUserName})}
                    value={this.state.textUserName}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(textPassword) => this.setState({textPassword})}
                    value={this.state.textPassword}
                />
                <Button raised primary text="Primary" />
          </View>
          <View style={{flex: 1, height: 100, backgroundColor: 'yellow'}} />
        </View>
    </ScrollView>
    )
    }
}

export default Home