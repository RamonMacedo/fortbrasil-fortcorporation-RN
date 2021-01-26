import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f9f9f9;
  justify-content: center;
  align-items: center;
`;

export const FormBox = styled.View`
  width: 100%;
  padding: 30px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #FC823F;
  font-family: 'OpenSans-SemiBold';
  text-align: left;
  margin-bottom: 2px;
`;

export const BoxButton = styled.View`
  margin: 0 50px;
`;

export const BorderButtomSave = styled.View`
  border: 1px solid #2369a6;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonSave = styled(RectButton)`
  background: #fff;
  align-items: center;

  border-radius: 5px;
`;

export const TextButton = styled.Text`
  padding: 8px;
  color: #2369a6;
  font-family: 'OpenSans-SemiBold';
  font-size: 18px;
`;

export const BorderButtomLogOut = styled.View`
  border: 1px solid #c73434;
  border-radius: 5px;
`;

export const ButtonLogOut = styled(RectButton)`
  background: #fff;
  align-items: center;
  border-radius: 5px;
`;

export const TextButtonLogOut = styled.Text`
  padding: 8px;
  color: #c73434;
  font-family: 'OpenSans-SemiBold';
  font-size: 18px;
`;
