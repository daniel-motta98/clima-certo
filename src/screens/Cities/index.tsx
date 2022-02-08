import React, { useState } from 'react';
import { Alert } from 'react-native';
import themes from '../../global/themes';
import Input from '../../components/Input';

import CardForecast from '../../components/CardForecast';

import * as  S from './styles';

const Cities: React.FC = () => {

  const [searchCity, setSearchCity] = useState('');
  const [city, setCity] = useState([
    {
      id: 1,
      name: 'Alto Alegre',
      temperature: 18,
      subtitle: 'Brasil',
      typeRain: 'Chuva Leve',
      min: 18,
      max: 30,
    },
    {
      id: 2,
      name: 'Porto Alegre',
      temperature: 18,
      subtitle: 'Brasil',
      typeRain: 'Chuva Forte',
      min: 4,
      max: 12,
    },
    {
      id: 3,
      name: 'Orlando',
      temperature: 18,
      subtitle: 'US',
      typeRain: 'Tempestade',
      min: 14,
      max: 26,
    },
    {
      id: 4,
      name: 'Toronto',
      temperature: 18,
      subtitle: 'Canadá',
      typeRain: 'Chuva Leve',
      min: -2,
      max: 5,
    },
    {
      id: 5,
      name: 'Páris',
      temperature: 18,
      subtitle: 'França',
      typeRain: 'Alerta de Granizo',
      min: 17,
      max: 29,
    },
    {
      id: 6,
      name: 'Blumenau',
      temperature: 18,
      subtitle: 'Brasil',
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
  });

  const renderItem = ({ item }: any) => {
    return (
      <CardForecast
        labelTitle={item.name}
        currentTemperature={item.temperature}
        labelSubtitle={item.subtitle}
        typeRain={item.typeRain}
        iconLikeName={'hearto'}
        iconLikeColor={themes.colors.danger200}
        iconLikeSize={32}
        minTemparature={item.min}
        maxTemperature={item.max}
      />
    );
  }

  return (
    <S.Container>
      <S.BoxHeader>
        <Input placeholder='Pesquise pelo nome da cidade' value={searchCity} onChangeText={text => setSearchCity(text)} nameIcon={'search'} colorIcon={themes.colors.constrast1000} sizeIcon={32} />
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