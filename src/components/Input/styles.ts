import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 45px;
  padding: 0 16px;
  background: #ffffff;
  border: 1px solid #c1c1c1;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #5d5d5d;
  font-size: 16px;
  font-family: 'OpenSans-Regular';
`;
