import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Share, Alert } from 'react-native';

import {
  Container,
  ButtonText,
  HeaderTitle,
  ButtonShared,
  ButtonBack,
} from './styles';

interface Props {
  product?: {
    id: string;
    description: string;
  };
  shared?: boolean;
}

const HeaderProduct: React.FC<Props> = ({
  children,
  product,
  shared = false,
  ...rest
}) => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Mais Barato | Venha conferir ${product?.description} com o melhor preço próximo a você!`,
        url: `appmaisbarato://appmaisbarato/ProductDetail/${product?.id}`,
        title: 'Lugar de preço baixo é aqui!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Container {...rest}>
      <ButtonBack
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ButtonText>
          <Icon name="chevron-left" size={20} color="#FC823F" />
          Voltar
        </ButtonText>
      </ButtonBack>
      <HeaderTitle>{children}</HeaderTitle>
      {shared && (
        <ButtonShared>
          <ButtonText onPress={onShare}>
            <Icon name="share-2" size={20} color="#FC823F" />
          </ButtonText>
        </ButtonShared>
      )}
    </Container>
  );
};
export default HeaderProduct;
