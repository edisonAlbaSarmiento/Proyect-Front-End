import React from 'react'
import { Text, View, TextInput } from 'react-native';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { textUserName: 'Usuario', textPassword: 'Contraseña' };
        }
        
render(){
    return(
        <View>
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
        </View>
    )
    }
}

export default Login