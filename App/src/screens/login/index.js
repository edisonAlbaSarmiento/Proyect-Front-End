/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import CheckBox from '@react-native-community/checkbox';
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
} from './styles';

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
              <CheckBox
                value={isSelected}
                onValueChange={this.setSelection}
              />
              <SubText> Remember me </SubText>
            </ContainerCheck>
            <SubText colorText="#006B48">Forgot Password </SubText>

          </ContainerSecond>
          <ContainerButton>
            <Button>
              <TextButton>
                Login
              </TextButton>
            </Button>
          </ContainerButton>
        </ContainerForm>
      </Container>
    );
  }
}

export default Login;
