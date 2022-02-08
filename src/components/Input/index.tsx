import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import themes from '../../global/themes';

import * as S from './styles';

export interface IInput {
  placeholder: string;
  nameIcon?: any
  colorIcon?: string;
  sizeIcon?: number;
  value: any;
  onChangeText: (val: string) => void;
}

const Input: React.FC<IInput> = ({placeholder, nameIcon, colorIcon, sizeIcon, value, onChangeText}) => {

  return (
    <S.Container>
      <S.BoxTextInputCustom>
        <S.BoxSearchAndTextInput>
        <S.TextInputCustom
          placeholder={placeholder}
          keyboardType='default'
          placeholderTextColor={`${themes.colors.neutral500}`}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize='words'
        />
        <S.BoxIcon>
          <Icon name={nameIcon} color={colorIcon} size={sizeIcon} />
        </S.BoxIcon>
        </S.BoxSearchAndTextInput>
      </S.BoxTextInputCustom>
    </S.Container>
  );
}

export default Input;