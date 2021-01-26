import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  min-height: 70px;
  width: 100%;
  padding: 20px 20px;

  flex-direction: row;

  justify-content: center;
  align-items: center;

  background: transparent;
  position: absolute;
  z-index: 10;
`;

export const HeaderTitle = styled.Text`
  font-family: 'OpenSans-SemiBold';
  color: #ffffff;
  font-size: 24px;
`;

export const ButtonText = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #ffffff;
  font-size: 18px;
`;

export const ButtonBack = styled(RectButton)`
  padding: 5px;
  position: absolute;
  left: 20px;
`;
