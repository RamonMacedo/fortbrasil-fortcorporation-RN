import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Segment = styled.View`
  margin-bottom: 20px;
`;

export const HeaderSegment = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0px 20px;
`;

export const TitleSegment = styled.Text`
  color: #5d5d5d;
  font-family: 'OpenSans-SemiBold';
  font-size: 16px;
`;

export const SeeMoreSegment = styled.Text`
  color: #2b7fc9;
  font-family: 'OpenSans-Regular';
  font-size: 16px;
`;

export const Container = styled.View`
  flex-direction: column;
`;

export const TabsContainer = styled.View`
  padding: 0 10px;
`;

export const TabItem = styled(RectButton)`
  flex: 1;
  min-height: 100px;

  border-radius: 5px;

  margin-bottom: 10px;

  background: #fff;

  flex-direction: row;

  align-items: center;
`;

export const TabImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TabBox = styled.View`
  padding: 10px 10px;
`;

export const TabCategoryTitle = styled.Text`
  flex: 1;
  max-width: 80%;
  color: #5d5d5d;

  /* padding-right: 10px; */

  font-family: 'OpenSans-SemiBold';
  font-size: 16px;

  text-transform: capitalize;
`;

export const BoxPrice = styled.View`
  flex-direction: row;
`;

export const Market = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 14px;
  margin: 8px 0px;
  max-width: 240px;

  text-transform: capitalize;
`;

export const Price = styled.Text`
  color: #007b0c;

  font-family: 'OpenSans-Regular';
  font-size: 14px;
`;

export const SubPrice = styled.Text`
  color: #5d5d5d;
  text-decoration: line-through;

  font-family: 'OpenSans-Regular';
  font-size: 14px;
  margin-left: 15px;
`;
