import React, { useState } from 'react';
import CardForecast from '../../components/CardForecast';

import * as S from './styles';

const InformationWeather: React.FC = () => {

  const [infoForecast, setInfoForecast] = useState([
    {
      id: 1,
      weekDay: 'Hoje',
      temperature: 18,
      date: '08/11/2022',
      rainType: 'Chuva Fraca',
      min: 3,
      max: 10,
    },
    {
      id: 2,
      weekDay: 'Amanhã',
      temperature: 2,
      date: '09/02/2022',
      rainType: 'Tempestade',
      min: 2,
      max: 10,
    },
    {
      id: 3,
      weekDay: 'Quarta',
      temperature: 10,
      date: '10/02/2022',
      rainType: 'Chuva Forte',
      min: 13,
      max: 24,
    },
    {
      id: 4,
      weekDay: 'Quinta',
      temperature: 7,
      date: '10/02/2022',
      rainType: 'Ensolarado',
      min: 20,
      max: 34,
    },
    {
      id: 5,
      weekDay: 'Sexta',
      temperature: 22,
      date: '10/02/2022',
      rainType: 'Nublado',
      min: 12,
      max: 23,
    },
  ]);

  const renderItem = ({ item }: any) => {
    return (
      <>
      <CardForecast 
        labelTitle={item.weekDay}
        currentTemperature={item.temperature}
        labelSubtitle={item.date}
        typeRain={item.rainType}
        minTemparature={item.min}
        maxTemperature={item.max}
      />
      </>
    );
  }

  return (
    <S.Container>
      <S.FlatListCustom
        data={infoForecast}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
      />
    </S.Container>
  );
}

export default InformationWeather;