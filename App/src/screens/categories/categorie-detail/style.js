import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;

`;

export const ContainerHeader = styled.View`
  width: 100%;
  height: 45%;
`;

export const ImageHeader = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 30px;

`;

export const ContainerButton = styled.TouchableOpacity`
  width: 12%;
  height: 10%;
  position: absolute;
  top: 20%;
  left: 6%;
  background-color: #dac9b9;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0.8;
`;

export const ContainerCardHeader = styled.View`
  width: 90%;
  height: 15%;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 35%;
  left: 6%;
  padding: 5%;
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

export const ContainerTitleCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleCard = styled.Text`
  font-size: 18px;
`;

export const TitlePunctuationCard = styled.Text`
  font-size: 10px;
`;

export const ContainerStar = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
`;

export const ContainerSubTitleCard = styled.View``;

export const SubTitleCard = styled.Text`
  padding-top: 2%;
  color: #b7b7b7;
  font-size: ${(props) => (props.fontSizeText ? `${props.fontSizeText}` : '15px')};
  font-weight: bold;
`;

export const ContainerDescription = styled.View`
  justify-content: center;
  width: 100%;
  background-color: white;
  padding: 10px;
  top: 6%
`;

export const Description = styled.Text`
  color: #949193;
  font-size: 15px;
  padding: 10px;
`;


export const ContainerInformation = styled.View`
  width: 100%;
  padding: 10px;
`;

export const TitleContainerInformation = styled.Text`
  font-size: 18px;
  color: #0b0b0b;
`;

export const ContainerInformationItems = styled.View`
  top: 4%;
  width: 100%
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`;

export const TitleContainerInformationItems = styled.Text`
  color: #949193;
  font-size: 16px;
  width: 50%;
  padding: 3px;

`;

export const ContainerButtons = styled.View`
  width: 95%
  top: 6%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 60%;
  height: 50px;
  background-color: green;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 18px;
`;

export const ButtonHeart = styled.TouchableOpacity`
  width: 15%;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: #cbc9ca;
  border-style: solid;
  border-width: 1;
`;
