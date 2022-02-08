import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import CardForecast from '../../components/CardForecast';

import themes from '../../global/themes';

import * as  S from './styles';

const Home: React.FC = () => {

  const { navigate } = useNavigation();
  const [city, setCity] = useState([
    {
      id: 1,
      name: 'Alto Alegre',
      temperature: 18,
      subtitle: 'Brasil',
      typeRain: 'Chuva Leve',
      min: 18,
      max: 30,
      favorite: true
    },
    {
      id: 2,
      name: 'Porto Alegre',
      temperature: 18,
      subtitle: 'Brasil',
      typeRain: 'Chuva Forte',
      min: 4,
      max: 12,
      favorite: true,
    },
    {
      id: 3,
      name: 'Orlando',
      temperature: 18,
      subtitle: 'US',
      typeRain: 'Tempestade',
      min: 14,
      max: 26,
      favorite: true,
    }
  ]);

  const handleAddCity = () => {
    console.log('funcao like');
  }

  const handleToGoInformationWeather = () => {
    //@ts-ignore
    navigate('InformationWeather');
  }

  const renderItem = ({ item }: any) => {
    return (
      <>
        <CardForecast
          labelTitle={item.name}
          currentTemperature={item.temperature}
          labelSubtitle={item.subtitle}
          typeRain={item.typeRain}
          iconLikeName={'heart'}
          iconLikeColor={themes.colors.danger200}
          iconLikeSize={32}
          // callBack={handleAddCity}
          minTemparature={item.min}
          maxTemperature={item.max}
          callBackButtonBlue={handleToGoInformationWeather}
          labelButtonBlue={'PRÓXIMAS PREVISÕES'}
        />
      </>
    );
  }

  return (
    <S.Container>
      {city.length === 0
        ?
        <S.BoxLabelNoCities>
          <S.LabelBold>Você ainda não favoritou nenhuma cidade. 😕</S.LabelBold>
          <S.LabelNormal>
            Adicione uma cidade acessando o campo "cidades" na parte inferior do aplicativo, caso ache viável digite o nome da mesma na barra de busca.
          </S.LabelNormal>
        </S.BoxLabelNoCities>
        :
        <S.FlatListCustom
          data={city}
          keyExtractor={(item: any) => item.id}
          renderItem={renderItem}
        />
      }
    </S.Container>
  );
}

export default Home;