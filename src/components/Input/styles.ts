import styled from 'styled-components/native';
import themes from '../../global/themes';

export const Container = styled.View``;

export const BoxTextInputCustom = styled.View``;

export const TextInputCustom = styled.TextInput`
  background-color: ${themes.colors.contrast0};
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  height: 60px;
  width: 85%;
  margin-left: 30px;
`;

export const BoxSearchAndTextInput = styled.View`
  flex-direction: row;
`;

export const BoxIcon = styled.View`
  padding: 12px;
  right: 55px;
`;