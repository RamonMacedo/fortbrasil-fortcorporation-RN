import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 45px;

  justify-content: center;
  align-items: center;
  margin-top: 8px;

  background: #FC823F;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-family: 'OpenSans-SemiBold';
  color: #fff;
  font-size: 18px;
`;
