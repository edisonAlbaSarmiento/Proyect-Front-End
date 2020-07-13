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
  flex-direction: column;
  height: 70%;
`;

export const ContainerFooter = styled.View`
  background-color: #00b075;
  width: 100%;
  height: 12%;
  flex-direction: column;
  padding: 5%;
  border
`;

export const ContainerTitleFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 4%;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const NavItemTextFooter = styled.Text`
  color: black;
  padding-right: 9%;
`;

export const ContainerIconFooter = styled.TouchableOpacity`
  padding-right: 8%;
  justify-content: center;
`;
