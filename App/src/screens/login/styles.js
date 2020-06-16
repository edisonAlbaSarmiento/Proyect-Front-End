import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const lottieAnimation = require('../../assets/loading.json');

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 10%;
  background-color: #f5f6f8;
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
  border-color: white;
  /* Shadow */
  shadow-color: #000;
  shadow-offset: {
    height: 0;
    width: 3;
  }
  shadow-opacity: 0.29;
  shadow-radius: 4.65;

  elevation: 3;
  /* Shadow */
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
  color: ${(props) => (props.colorText ? `${props.colorText}` : '#afafb1')}
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
  margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}` : 0)}
  margin-bottom: 15px;
  flex-direction: row;
  background-color: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : '#00b075')};
  /* Shadow */
  shadow-color: #000;
  shadow-offset: {
    height: 0;
    width: 3;
  }
  shadow-opacity: 0.29;
  shadow-radius: 4.65;

  elevation: 3;
  /* Shadow */
`;

export const TextButton = styled.Text`
  line-height: 18px;
  font-size: 18px;
  color: white;
`;

export const ContainerThree = styled.View`
  width: 75%;
  flex-direction: row;
  margin-top: 2%;
  justify-content: space-between;
`;

export const ContainerFooter = styled.View`
  width: 40%;
  height: 50;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerFour = styled.View`
  margin: 10%;
`;

export const ImageIcon = styled.Image`
  width: ${(props) => (props.widthImage ? `${props.widthImage}` : '30')};
  height:${(props) => (props.heightImage ? `${props.heightImage}` : '30')};
`;
