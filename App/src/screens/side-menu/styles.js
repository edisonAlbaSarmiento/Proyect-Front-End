import styled from 'styled-components';

export const NavItem = styled.TouchableOpacity`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  padding: 14px 18px;
  background-color: red;
  border-bottom-width: 1px;
  border-color: green;
`;

export const NavItemText = styled.Text`
  color: white;
  padding-left: 2%;
`;

export const ContainerIcon = styled.View`
  padding-right: 7%;
`;
