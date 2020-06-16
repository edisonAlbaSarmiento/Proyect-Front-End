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

export const Title = styled.Text`
  font-size: 30;
  font-weight: bold;
  `;

export const ContainerForm = styled.View`
  width: 100%;
  align-items: center;
`;

export const ContainerInputs = styled.View`
  width: 80%;
  height: auto;
`;

export const Animation = styled(LottieView).attrs({
  source: lottieAnimation,
  autoPlay: true,
  loop: true,
})`
  height: 200;
  width: 200;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  height: 40;
  border-Color: gray;
  border-width: 1;
  color: black;
  background-color: white;
  border-radius: 5;
`;
export const ContainerSecond = styled.View`
  width: 80%;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerCheck = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubText = styled.Text`
  font-size: 12;
  font-weight: bold;
  `;
