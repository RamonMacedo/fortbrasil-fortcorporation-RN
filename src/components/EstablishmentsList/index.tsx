/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import ICreateEstablishmentsListDTO from '../../dtos/ICreateEstablishmentsListDTO';

import ImageNonExist from '../../assets/logo.png';

// import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  TabsContainer,
  TabItem,
  TabImage,
  TabCategoryTitle,
  TabBox,
  Market,
  BoxPrice,
  Price,
  SubPrice,
  Segment,
  HeaderSegment,
  TitleSegment,
  SeeMoreSegment,
} from './styles';

interface RecentProps {
  titleSegment: String;
  establishments: ICreateEstablishmentsListDTO[];
}

const EstablishmentsList: React.FC<RecentProps> = ({
  establishments,
  titleSegment,
}) => {
  const { navigate } = useNavigation();

  const navigateToEstablishmentDetail = useCallback(
    (establishment_id: string) => {
      navigate('EstablishmentDetail', { establishment_id });
    },
    [navigate],
  );

  return (
    <>
      {establishments.length > 0 && (
        <Segment>
          <HeaderSegment>
            <TitleSegment>{titleSegment}</TitleSegment>
          </HeaderSegment>
          <Container>
            <TabsContainer>
              {establishments.map(establishments => (
                <TabItem
                  key={establishments.id}
                  onPress={() => navigateToEstablishmentDetail(establishments.id)}
                >
                  {establishments.avatar ? (
                    <TabImage source={{ uri: establishments.avatar }} />
                  ) : (
                    <TabImage source={ImageNonExist} />
                  )}
                  <TabBox>
                    <TabCategoryTitle numberOfLines={2}>
                      {`${establishments.estab_name}`}
                    </TabCategoryTitle>
                    <Market numberOfLines={2}>
                      {`${establishments.description}`}
                    </Market>
                    <BoxPrice>
                      <Price>{`${establishments.city} - ${establishments.state}`}</Price>
                    </BoxPrice>
                  </TabBox>
                </TabItem>
              ))}
            </TabsContainer>
          </Container>
        </Segment>
      )}
    </>
  );
};

export default EstablishmentsList;
