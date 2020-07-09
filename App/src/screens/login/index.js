/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { Alert } from 'react-native';
import {
  Container,
  ContainerImage,
  Title,
  ContainerForm,
  Animation,
  ContainerInputs,
  TextInput,
  ContainerCheck,
  ContainerSecond,
  SubText,
  Button,
  ContainerButton,
  TextButton,
  ContainerThree,
  ContainerFour,
  ContainerFooter,
  ImageIcon
} from './styles';

const iconFacebook = require('../../assets/facebookIcon.png');
const iconGoogle = require('../../assets/googleIcon.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  setSelection = () => {
    const { isSelected } = this.state;
    this.setState({ isSelected: !isSelected });
  }

  render() {
    const { isSelected } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <ContainerImage>
          <Animation />
        </ContainerImage>
        <ContainerForm>
          <Title> LOGIN </Title>
          <ContainerInputs>
            <TextInput placeholder="Email Address" />
            <TextInput placeholder="Password" secureTextEntry />
          </ContainerInputs>
          <ContainerSecond>
            <ContainerCheck>
              {/* <CheckBox
                value={isSelected}
                onValueChange={this.setSelection}
              /> */}
              <SubText> Remember me </SubText>
            </ContainerCheck>
            <SubText
              colorText="#006B48"
              onPress={() => Alert.alert('forgot')}
            >
              Forgot Password
            </SubText>
          </ContainerSecond>
          <ContainerButton>
            <Button onPress={() => navigation.navigate('Home')}>
              <TextButton>
                Login
              </TextButton>
            </Button>
          </ContainerButton>
          <ContainerThree>
            <SubText> Do not have an account?</SubText>
            <SubText
              colorText="#006B48"
              onPress={() => Alert.alert('New Account')}
            >
              Create one new account
            </SubText>
          </ContainerThree>
          <ContainerFour>
            <Title> OR </Title>
          </ContainerFour>
          <ContainerFooter>
            <Button backgroundColor="white">
              <ImageIcon source={iconGoogle} />
            </Button>
            <Button backgroundColor="#3d5a9a" marginLeft="15%">
              <ImageIcon widthImage="15" heightImage="30" source={iconFacebook} />
            </Button>
          </ContainerFooter>
        </ContainerForm>
      </Container>
    );
  }
}

export default Login;
