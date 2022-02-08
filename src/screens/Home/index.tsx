import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather'

import themes from '../../global/themes';

import * as  S from './styles';

const Home: React.FC = () => {

  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.ImageCustom source={{ uri: 'https://p0.pikist.com/photos/881/387/dawn-sun-mountain-landscape-sky-clouds-heaven-weather-cool-wallpaper.jpg' }} />
      <S.BoxContentHeader>
        <S.WrapperOpacity>
          <S.BoxInfoTemperature>
            <Icon name={"sun"} color={themes.colors.warning200} size={50} />
            <S.BoxInfoCurrentTemperature>
              <S.LabelCurrentTemperature>27</S.LabelCurrentTemperature>
              <S.LabelTypeTemperature>ºC</S.LabelTypeTemperature>
            </S.BoxInfoCurrentTemperature>
            <S.LabelCity>Alto Alegre</S.LabelCity>
          </S.BoxInfoTemperature>
        </S.WrapperOpacity>
      </S.BoxContentHeader>

      <S.BoxInfoTemperatureDay>
        <S.WrapperOpacity>
          <S.LabelInformations>Informações Adicionais</S.LabelInformations>
          <S.BoxWrapperInformation>
            <S.WrapperLabel>Vento</S.WrapperLabel>
            <S.WrapperLabel>Humidade</S.WrapperLabel>
          </S.BoxWrapperInformation>
          <S.BoxWrapperInformation>
            <S.WrapperLabelChildren>65 m/h</S.WrapperLabelChildren>
            <S.WrapperLabelChildren>80%</S.WrapperLabelChildren>
          </S.BoxWrapperInformation>

          <S.BoxWrapperInformation>
            <S.WrapperLabel>Temp. Min</S.WrapperLabel>
            <S.WrapperLabel>Temp. Max</S.WrapperLabel>
          </S.BoxWrapperInformation>

          <S.BoxWrapperInformation>
            <S.WrapperLabelChildren>21</S.WrapperLabelChildren>
            <S.WrapperLabelChildren>31</S.WrapperLabelChildren>
          </S.BoxWrapperInformation>

        </S.WrapperOpacity>
      </S.BoxInfoTemperatureDay>

    </S.Container>
  );
}

export default Home;