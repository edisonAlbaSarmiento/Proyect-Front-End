import styled from 'styled-components';

export const NavItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  padding: 14px 14px;
`;

export const NavItemText = styled.Text`
  color: black;
  padding-left: 2%;
`;

export const ContainerIcon = styled.View`
  padding-right: 7%;
`;

export const ContainerSideMenu = styled.View`
  background-color: yellow;
  flex-direction: column;
  height: 70%;
`;

export const ContainerFooter = styled.View`
  background-color: red;
  width: 100%;
  height: 12%;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerTitleFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 2%;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  justify-content: center;
`;
