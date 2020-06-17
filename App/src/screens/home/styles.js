import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 10%;
  background-color: white;
`;

export const ContainerHeader = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const ContainerTitle = styled.View`
  align-items: center;
`;

export const ContainerBody = styled.View`
  width: 100%;
  padding: 5%;
  background-color: #f9f9f9;
  height: 100%;
`;

export const ContainerSearch = styled.View`
width: 100%;
height: 50;
padding: 10px;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-radius: 20;
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
background-color: white;

`;

export const ContainerCategories = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding-left: 10px;
  padding-top: 10px;
`;

export const ContainerItems = styled.FlatList``;

export const CardItem = styled.TouchableOpacity`
  width: 70;
  height: 12%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  flex-direction: row;
  background-color: #00b075;
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

export const TextInput = styled.TextInput`
  width: 70%;
  font-size: 15;
  height: 50;
  border-color: white;
  border-width: 1;
  color: black;
  background-color: white;
`;
