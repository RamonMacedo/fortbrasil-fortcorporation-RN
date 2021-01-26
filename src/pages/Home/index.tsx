import React, { useState, useCallback, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Toast from 'react-native-simple-toast';

import ImageNonExist from '../../assets/back.png';

import {
  ActivityIndicator,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderText,
  SearchBox,
  InputSearch,
  Button,
  TabItem,
  TabImage,
  TabCategoryTitle,
  TabBox,
  Market,
  BoxPrice,
  Price,
  TabsContainer
} from './styles';

import isNumber from '../../utils/isNumber';

import api from '../../services/api';

import ICreateEstablishmentsListDTO from '../../dtos/ICreateEstablishmentsListDTO';

import { FlatList } from 'react-native-gesture-handler';

interface EstabProps {
  count: number;
  totalPage: number;
  establishments: ICreateEstablishmentsListDTO[];

}

const Home: React.FC = () => {

  const [establishments, setEstablishments] = useState<ICreateEstablishmentsListDTO[]>(
    [],
  );

  const [fetchIndicator, setFetchIndicator] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editable, setEditable] = useState('');

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const storagedEstablishments = useCallback(async () => {
    try {
      if(loading){
        return;
      }

      setLoading(true);

      const { data } = await api.get<EstabProps>(`establishments`);

      if (data) {
        setEstablishments(data.establishments);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      Toast.show('Nenhum estabelecimento encontrado!');
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback(async () => {
    try {
      if (editable.length > 0) {
        if (!isNumber(editable)) {

          if(loading){
            return;
          }

          setLoading(true);

          const { data } = await api.get(`establishments/search/${editable}`, {
            params: { page }
          });

          console.log(data);

          if (!data) {
            Toast.show('Nenhum estabelecimento encontrado!');
          }

          if(fetchIndicator === false) {
            setEstablishments(data.establishments);
          } else {
            setEstablishments([...establishments, ...data.establishments]);
          }

          setTotal(data.count);
          setPage(page + 1);
          setLoading(false);
          setFetchIndicator(true);
        }
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [editable]);

  useEffect(() => {
    storagedEstablishments();
  }, [
    storagedEstablishments,
  ]);

  return (
    <>
      {loading && (
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 10,
          }}
        >
          <ActivityIndicator
            style={{ flex: 1, zIndex: 11 }}
            size="large"
            color="#fff"
          />
        </View>
      )}
      <Container>
        <Header>
          <HeaderText>O que você está procurando?</HeaderText>
          <SearchBox>
            <InputSearch
              autoCorrect={false}
              placeholderTextColor="#5D5D5D"
              placeholder="Busque o estabelecimento desejado..."
              value={editable}
              onChangeText={text => setEditable(text)}
              returnKeyType="send"
              onSubmitEditing={handleSearch}
            />
            <Button>
              <Icon
                onPress={handleSearch}
                name="search"
                size={20}
                color="#5D5D5D"
              />
            </Button>
          </SearchBox>
        </Header>

        <TabsContainer>
          <FlatList
            data={establishments}
            keyExtractor={establishment => String(establishment.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={fetchIndicator ? handleSearch : null}
            onEndReachedThreshold={0.2}
            renderItem={({ item: establishment }) => (
              <TabItem
                key={establishment.id}
              >
                {establishment.avatar ? (
                  <TabImage source={{ uri: establishment.avatar }} />
                ) : (
                  <TabImage source={ImageNonExist} />
                )}
                <TabBox>
                  <TabCategoryTitle numberOfLines={2}>
                    {`${establishment.estab_name}`}
                  </TabCategoryTitle>
                  <Market numberOfLines={2}>
                    {`${establishment.description}`}
                  </Market>
                  <BoxPrice>
                    <Price>{`${establishment.city} - ${establishment.state}`}</Price>
                  </BoxPrice>
                </TabBox>
              </TabItem>
            )}
          />
        </TabsContainer>
      </Container>
    </>
  );
};

export default Home;
