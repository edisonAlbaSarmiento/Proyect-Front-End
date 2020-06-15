import React, { Component } from 'react';
import {
  Container,
  ContainerImage,
  Title,
  ContainerForm,
  Animation,
  ContainerInputs,
  TextInput
} from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <ContainerImage>
          <Animation />
        </ContainerImage>
        <ContainerForm>
          <Title> LOGIN </Title>
          <ContainerInputs>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
          </ContainerInputs>

        </ContainerForm>
      </Container>
    );
  }
}

export default Login;
