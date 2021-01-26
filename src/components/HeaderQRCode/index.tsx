import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ButtonText,
  HeaderTitle,
  ButtonShared,
  ButtonBack,
} from './styles';

interface ReqProps {
  backToHome?: boolean;
}

const HeaderProduct: React.FC<ReqProps> = ({
  children,
  backToHome,
  ...rest
}) => {
  const navigation = useNavigation();

  return (
    <Container {...rest}>
      <ButtonBack
        onPress={() => {
          backToHome
            ? navigation.reset({
                routes: [{ name: 'HomeTabs' }],
                index: 0,
              })
            : navigation.goBack();
        }}
      >
        <ButtonText>
          <Icon name="chevron-left" size={20} color="#FFFFFF" />
          Voltar
        </ButtonText>
      </ButtonBack>
      <HeaderTitle>{children}</HeaderTitle>
    </Container>
  );
};
export default HeaderProduct;
