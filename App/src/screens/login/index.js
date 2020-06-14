import React, { Component } from 'react';
import {
  Container, ContainerImage, Title, ContainerForm, Animation
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
          <ContainerImage>
            <Title> LOGIn </Title>
          </ContainerImage>
          <ContainerImage>
            <Title> LOGIn </Title>
          </ContainerImage>

        </ContainerForm>
      </Container>
    );
  }
}

export default Login;
