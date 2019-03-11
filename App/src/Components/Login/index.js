import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Dimensions } from 'react-native';
import { Button } from 'react-native-material-ui';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { textUserName: 'Usuario', textPassword: 'Contraseña' };
        }
        
render(){
    return(
        <View style={{flex: 1}}>
            <View style={{flex: 3, backgroundColor: 'powderblue', width: 350, height: 150,
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
                    <View style={{ backgroundColor:'yellow', width: 350, height: 50}}>
                        <Text> Bienvenidos Egresados </Text>
                    </View>

            </View>
            <View style={{flex: 3, backgroundColor: 'skyblue'}} >
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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
            <View style={{flex: 1, backgroundColor: 'steelblue'}} />
        </View>
    )
    }
}

export default Login