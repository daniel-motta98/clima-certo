import React, { useEffect, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { useNavigation } from '@react-navigation/native';

import themes from '../../global/themes';

import Icon from 'react-native-vector-icons/AntDesign';

import api from '../../services/api';

import * as  S from './styles';
import { KeyboardAvoidingView } from 'react-native';

const Cities: React.FC = () => {

  const { navigate } = useNavigation();
  const [backgroundUrl, setBackgroundUrl] = useState('https://p0.piqsels.com/preview/622/143/689/4k-wallpaper-clouds-cloudy-dark.jpg');
  const [name, setName] = useState('');
  const [currentTemperature, setCurrentTemperature] = useState(0);
  const [country, setCountry] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [nameSearch, setNameSearch] = useState('');

  const handleAddCity = (id: any) => {
    setFavorite(!favorite)
  }

  const handleToGoInformation = () => {
    //@ts-ignore
    navigate('InformationWeather');
  }

  const getNameCitySearch = (data: any) => {
    setNameSearch(data.description);
  }


  useEffect(() => {
    const getCity = async () => {
      try {
        if (nameSearch) {
          const response = await api.get(`/?q=${nameSearch}&appid=a788f547d04e1ae0fac1ecd5419ae2c1&units=metric`);
          const { data } = response;
          setName(data.name);
          setCurrentTemperature(data.main.temp);
          setCountry(data.sys.country);
          setMin(data.main.temp_min);
          setMax(data.main.temp_max);
        }
      } catch (err) {
        console.log('Deu erro', err);
      }
    }
    getCity();
  }, [nameSearch]);

  return (
    <>
      <S.Container>
        <S.ImageCustom source={{ uri: backgroundUrl }} />
        <GooglePlacesAutocomplete
          placeholder='Producrar por cidade'
          onPress={(data) => getNameCitySearch(data)}
          query={{
            key: 'AIzaSyARGgDWIbFmrvoKbhzgZ7VE8Azj_hzrpco',
            language: 'en',
          }}
          styles={{
            textInput: {
              margin: 20,
              borderRadius: 10,
              justifyContent: 'center',
              zIndex: 999,
            }
          }}
        />
        {!nameSearch && (
          <S.BoxCities style={{ display: 'none' }}>
            <S.BoxLabelNameCityAndForecast>
              <S.LabelNameCity>{name}</S.LabelNameCity>
              <S.CurrentTemperature>{currentTemperature.toFixed(0)} ºC</S.CurrentTemperature>
            </S.BoxLabelNameCityAndForecast>
            <S.LabelSubtitle>{country}</S.LabelSubtitle>
            <S.BoxLabelTypeRainAndButtonAdd>
              <S.LabelMinAndMaxForecast>min: {min.toFixed(0)}º - max: {max.toFixed(0)}º</S.LabelMinAndMaxForecast>
              <S.CustomButtonAddCity onPress={handleAddCity}>
                <S.BoxIconFavorite>
                  <Icon name={'hearto'} color={themes.colors.danger200} size={32} />
                </S.BoxIconFavorite>
              </S.CustomButtonAddCity>
            </S.BoxLabelTypeRainAndButtonAdd>
            <S.BoxNextForecast>
              <S.LabelNextForecast onPress={handleToGoInformation}>PRÓXIMAS PREVISÕES</S.LabelNextForecast>
            </S.BoxNextForecast>
          </S.BoxCities>
        )}
        {nameSearch !== '' && (
          <>
            {favorite
              ?
              <S.BoxCitiesFavorite style={{ display: 'flex' }}>
                <S.BoxLabelNameCityAndForecast>
                  <S.LabelNameCity>{name}</S.LabelNameCity>
                  <S.CurrentTemperature>{currentTemperature.toFixed(0)} ºC</S.CurrentTemperature>
                </S.BoxLabelNameCityAndForecast>
                <S.LabelSubtitle>{country}</S.LabelSubtitle>
                <S.BoxLabelTypeRainAndButtonAdd>
                  <S.LabelMinAndMaxForecast>min: {min.toFixed(0)}º - max: {max.toFixed(0)}º</S.LabelMinAndMaxForecast>
                  <S.CustomButtonAddCity onPress={handleAddCity}>
                    <S.BoxIconFavorite>
                      <Icon name={'heart'} color={themes.colors.danger200} size={32} />
                    </S.BoxIconFavorite>
                  </S.CustomButtonAddCity>
                </S.BoxLabelTypeRainAndButtonAdd>
                <S.BoxNextForecastFavorite>
                  <S.LabelNextForecast onPress={handleToGoInformation}>PRÓXIMAS PREVISÕES</S.LabelNextForecast>
                  <S.LabelFavorite>Favorito!</S.LabelFavorite>
                </S.BoxNextForecastFavorite>
              </S.BoxCitiesFavorite>
              :
              <S.BoxCities style={{ display: 'flex' }}>
                <S.BoxLabelNameCityAndForecast>
                  <S.LabelNameCity>{name}</S.LabelNameCity>
                  <S.CurrentTemperature>{currentTemperature.toFixed(0)} ºC</S.CurrentTemperature>
                </S.BoxLabelNameCityAndForecast>
                <S.LabelSubtitle>{country}</S.LabelSubtitle>
                <S.BoxLabelTypeRainAndButtonAdd>
                  <S.LabelMinAndMaxForecast>min: {min.toFixed(0)}º - max: {max.toFixed(0)}º</S.LabelMinAndMaxForecast>
                  <S.CustomButtonAddCity onPress={handleAddCity}>
                    <S.BoxIconFavorite>
                      <Icon name={'hearto'} color={themes.colors.danger200} size={32} />
                    </S.BoxIconFavorite>
                  </S.CustomButtonAddCity>
                </S.BoxLabelTypeRainAndButtonAdd>
                <S.BoxNextForecastFavorite>
                  <S.LabelNextForecast onPress={handleToGoInformation}>PRÓXIMAS PREVISÕES</S.LabelNextForecast>
                </S.BoxNextForecastFavorite>
              </S.BoxCities>
            }
          </>
        )}
      </S.Container>
    </>
  );
}

export default Cities;