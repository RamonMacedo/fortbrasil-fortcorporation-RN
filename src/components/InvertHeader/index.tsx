import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonText, HeaderTitle, ButtonBack } from './styles';

const InvertHeader: React.FC = ({ children, ...rest }) => {
  const navigation = useNavigation();

  return (
    <Container {...rest}>
      <ButtonBack
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ButtonText>
          <Icon name="chevron-left" size={20} color="#FFF" />
          Voltar
        </ButtonText>
      </ButtonBack>
      <HeaderTitle>{children}</HeaderTitle>
    </Container>
  );
};
export default InvertHeader;
