import React, { useState } from 'react';
import { Alert } from 'react-native';
import themes from '../../global/themes';
import Input from '../../components/Input';

import * as  S from './styles';

const Cities: React.FC = () => {

  const [searchCity, setSearchCity] = useState('');
  const [city, setCity] = useState([
    {
      id: 1,
      name: 'Alto Alegre',
      coutry: 'Brasil',
      typeRain: 'Chuva Leve',
      min: 18,
      max: 30,
    },
    {
      id: 2,
      name: 'Porto Alegre',
      coutry: 'Brasil',
      typeRain: 'Chuva Forte',
      min: 4,
      max: 12,
    },
    {
      id: 3,
      name: 'Orlando',
      coutry: 'US',
      typeRain: 'Tempestade',
      min: 14,
      max: 26,
    },
    {
      id: 4,
      name: 'Toronto',
      coutry: 'Canadá',
      typeRain: 'Chuva Leve',
      min: -2,
      max: 5,
    },
    {
      id: 5,
      name: 'Páris',
      coutry: 'França',
      typeRain: 'Alerta de Granizo',
      min: 17,
      max: 29,
    },
    {
      id: 6,
      name: 'Blumenau',
      coutry: 'Brasil',
      typeRain: 'Chuva Forte',
      min: 14,
      max: 26,
    },
  ]);

  const handleAddCity = (id: any) => {
    Alert.alert('oi', 'oi');
  }

  const searchCities = city.filter((item: any) => {
    return item.name.indexOf(searchCity) >= 0;
  })

  const renderItem = ({ item }: any) => {
    return (
      <S.BoxCities>
        <S.BoxLabelNameCityAndForecast>
          <S.LabelNameCity>{item.name}</S.LabelNameCity>
          <S.LabelForecast>18 ºC</S.LabelForecast>
        </S.BoxLabelNameCityAndForecast>
        <S.LabelCountry>{item.coutry}</S.LabelCountry>
        <S.BoxLabelTypeRainAndButtonAdd>
          <S.LabelTypeRain>Chuva Fraca</S.LabelTypeRain>
          <S.CustomButtonAddCity>
            <S.LabelAdd onPress={(id) => handleAddCity(id)}>
              <S.CustomIcon name={'hearto'} color={`${themes.colors.danger300}`} size={32} />
            </S.LabelAdd>
          </S.CustomButtonAddCity>
        </S.BoxLabelTypeRainAndButtonAdd>
        <S.LabelMinAndMaxForecast>min: 13º - max: 25º</S.LabelMinAndMaxForecast>


      </S.BoxCities>
    );
  }

  return (
    <S.Container>
      <S.BoxHeader>
        <Input placeholder='Pesquise pelo nome da cidade' value={searchCity} onChangeText={text => setSearchCity(text)} nameIcon={'search'} colorIcon={'#000'} sizeIcon={32} />
      </S.BoxHeader>
      {searchCities.length === 0
        ?
        <S.BoxLabelNoCities>
          <S.LabelBold>Ops... A cidade que você digitou não existe. 😕</S.LabelBold>
        </S.BoxLabelNoCities>
        :
        <S.FlatListCustom
          data={searchCities}
          keyExtractor={(item: any) => item.id}
          renderItem={renderItem}
        />
      }
    </S.Container>
  );
}

export default Cities;