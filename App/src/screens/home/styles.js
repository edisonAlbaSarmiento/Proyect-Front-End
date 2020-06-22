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
  height: 10%;
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
  height: 30%;
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
  padding-left: 10px;
  padding-top: 10px;
`;

export const ContainerItems = styled.FlatList``;

export const CardItem = styled.TouchableOpacity`
  width: 50;
  height: 50%;
  border-radius: 10px;
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

export const ContainerItems2 = styled.FlatList`
background-color: black;

`;

export const ContainerCategoriesItems = styled.View`
  width: 100%;
  height: 40%;

  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContainerTitleItems = styled.View`
  align-items: center;
`;

export const ContainerProducts = styled.View`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
`;

export const ContainerCardProduct = styled.TouchableOpacity`
  width: 100%;
  height: 85%;
  padding-bottom: 100px;
  background-color: white;
  border-radius: 24;
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

export const ContainerHeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerCardProductItem = styled.View`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #dbe1ef;
  border-radius: 50;
  top: -45;
  left: 35%;
`;

export const ContainerCardIcon = styled.View`
  width: 100%;
  top: 6%;
  right: 100%;
`;

export const ContainerCardText = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  bottom: 100%;
  justify-content: center;
`;

export const ContainerCardTextSecond = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;

`;

export const ScrollViewContent = styled.ScrollView`
  background-color: #f9f9f9;

`;

export const ImageIcon = styled.Image`
  width: 80px;
  height: 80px;
`;

export const TitleCard = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const SubTitleCard = styled.Text`
  font-size: 10px;
  font-weight: bold;
`;

export const TitleFooterCard = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #b9bfc9;
`;
