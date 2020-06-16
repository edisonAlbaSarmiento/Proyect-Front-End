import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const lottieAnimation = require('../../assets/loading.json');

export const Container = styled.View`
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
  color: #006B48;
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
  margin-top: 5%;
  height: 50;
  border-Color: gray;
  border-width: 1;
  color: black;
  background-color: white;
  border-radius: 5;
`;
export const ContainerSecond = styled.View`
  width: 80%;
  margin-top: 4%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4%;
`;

export const ContainerCheck = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubText = styled.Text`
  font-size: 12;
  color: ${(props) => (props.colorText ? `${props.colorText}` : '#afafb1' )}
`;

export const ContainerButton = styled.View`
  width: 80%;
  height: 50;

`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  flex-direction: row;
  background-color: #00b075;
`;

export const TextButton = styled.Text`
  line-height: 18px;
  font-size: 14px;
  color: white;
`;
