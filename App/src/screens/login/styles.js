import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const lottieAnimation = require('../../assets/loading.json');

export const Container = styled.View`
  background-color: red;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 30%;

`;

export const ContainerImage = styled.View`
  width: 80%;
  height: auto;
`;

export const Title = styled.Text``;

export const ContainerForm = styled.View``;

export const Animation = styled(LottieView).attrs({
  source: lottieAnimation,
  autoPlay: true,
  loop: true,
})`
  height: 200;
  width: 200;
`;
