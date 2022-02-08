import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import themes from '../../global/themes';


import * as S from './styles';

interface ICardForecast {
  labelTitle?: string;
  currentTemperature?: number;
  labelSubtitle: string;
  typeRain?: string;
  iconLikeName?: any;
  iconLikeColor?: any,
  iconLikeSize?: any,
  callBack?: () => void;
  minTemparature?: number;
  maxTemperature?: number;
  callBackButtonBlue?: () => void;
  labelButtonBlue?: string;
}

const CardForecast: React.FC<ICardForecast> = ({
  labelTitle,
  currentTemperature,
  labelSubtitle,
  typeRain,
  callBack,
  iconLikeName,
  iconLikeColor,
  iconLikeSize,
  minTemparature,
  maxTemperature,
  callBackButtonBlue,
  labelButtonBlue
}) => {

  return (
    <>
      <S.BoxCities>
        <S.BoxLabelNameCityAndForecast>
          <S.LabelNameCity>{labelTitle}</S.LabelNameCity>
          <S.CurrentTemperature>{currentTemperature} ºC</S.CurrentTemperature>
        </S.BoxLabelNameCityAndForecast>
        <S.LabelSubtitle>{labelSubtitle}</S.LabelSubtitle>
        <S.BoxLabelTypeRainAndButtonAdd>
          <S.LabelTypeRain>{typeRain}</S.LabelTypeRain>
          <S.CustomButtonAddCity onPress={callBack}>
            <S.LabelAdd>
                <Icon name={iconLikeName} color={iconLikeColor} size={iconLikeSize} />
            </S.LabelAdd>
          </S.CustomButtonAddCity>
        </S.BoxLabelTypeRainAndButtonAdd>
        <S.LabelMinAndMaxForecast>min: {minTemparature}º - max: {maxTemperature}º</S.LabelMinAndMaxForecast>
        <S.BoxNextForecast>
          <S.LabelNextForecast onPress={callBackButtonBlue}>{labelButtonBlue}</S.LabelNextForecast>
        </S.BoxNextForecast>
      </S.BoxCities>
    </>
  );
}

export default CardForecast;