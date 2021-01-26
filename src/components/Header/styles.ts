import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: auto;
  width: 100%;
  padding: 20px 20px;

  flex-direction: row;

  justify-content: center;
  align-items: center;

  background: #f9f9f9;
  z-index: 10;
`;

export const HeaderTitle = styled.Text`
  font-family: 'OpenSans-SemiBold';
  color: #FC823F;
  font-size: 24px;
`;

export const ButtonText = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #FC823F;
  font-size: 18px;
`;

export const ButtonBack = styled(RectButton)`
  position: absolute;
  left: 15px;
  padding: 5px;
  z-index: 1;
`;
