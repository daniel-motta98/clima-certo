import React, { useCallback, useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import api from '../../services/api';

import * as  S from './styles';

const Home: React.FC = () => {

  const [backgroundUrl, setBackgroundUrl] = useState('https://p0.piqsels.com/preview/622/143/689/4k-wallpaper-clouds-cloudy-dark.jpg')
  const [currentLatitude, setCurrentLatitude] = useState('')
  const [currentLongitude, setCurrentLongitude] = useState('')
  const [watchID, setWatchID] = useState(0);
  const [currentTemperature, setCurrentTemperature] = useState(0);
  const [cityName, setCityName] = useState('');
  const [icon, setIcon] = useState([]);
  const [wind, setWind] = useState('');
  const [humidity, setHumidity] = useState('');
  const [tempMin, setTemMin] = useState(0);
  const [tempMax, setTemMax] = useState(0);
  const [loading, setLoading] = useState(true);

  const callLocation = () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão a localização atual.',
            message: 'Este aplicativo precisa acessar sua licalização para pegar sua cidade atual, assim consegue retornar a temperatura atual.',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'Ok',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          Alert.alert('Falha!', 'Permissão de localização negada!');
        }
      };
      requestLocationPermission();
    }
  }

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    const watchID = Geolocation.watchPosition((position) => {
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      setCurrentLatitude(currentLatitude);
      setCurrentLongitude(currentLongitude);
    });
    setWatchID(watchID);
  }  

  useEffect(() => {
    const getLocationActual = async () => {
      try {
        if (currentLatitude && currentLongitude) {
          const response = await api.get(`/?lat=${currentLatitude}&lon=${currentLongitude}&appid=a788f547d04e1ae0fac1ecd5419ae2c1&units=metric`);
          const { data } = response;
          setCurrentLatitude(data.coord.lat);
          setCurrentLongitude(data.coord.lon);
          setCurrentTemperature(data.main.temp)
          setCityName(data.name);
          setIcon(data.weather);
          setWind(data.wind.speed);
          setHumidity(data.main.humidity);
          setTemMin(data.main.temp_min);
          setTemMax(data.main.temp_max);
        }
      } catch (err) {
        console.log('Erro ao conectar a api', err);
      } finally {
        setLoading(false);
      }
    }
    getLocationActual();
    callLocation();
  }, []);


  return (
    <>
      {loading && (
        <S.BoxLoading>
          <S.LoadingCustom size={'large'} color="#f00" />
          <S.LabelLoading>Carregando dados, por favor aguarde.</S.LabelLoading>
        </S.BoxLoading>
      )}
      {!loading && (
        <S.Container>
          <S.ImageCustom source={{ uri: backgroundUrl }} />
          <S.BoxContentHeader>
            <S.WrapperOpacity>
              <S.BoxInfoTemperature>
                {icon.map((item: any, index: any) => {
                  return (
                    <S.BoxImageIcon key={index}>
                      <S.ImageIcon source={{ uri: `https://openweathermap.org/img/wn/${item.icon}@2x.png` }} />
                    </S.BoxImageIcon>
                  );
                })}
                <S.BoxInfoCurrentTemperature>
                  <S.LabelCurrentTemperature>{currentTemperature.toFixed(0)}</S.LabelCurrentTemperature>
                  <S.LabelTypeTemperature>ºC</S.LabelTypeTemperature>
                </S.BoxInfoCurrentTemperature>
                <S.LabelCity>{cityName}</S.LabelCity>
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
                <S.WrapperLabelChildren>{wind} m/h</S.WrapperLabelChildren>
                <S.WrapperLabelChildren>{humidity}%</S.WrapperLabelChildren>
              </S.BoxWrapperInformation>

              <S.BoxWrapperInformation>
                <S.WrapperLabel>Temp. Min</S.WrapperLabel>
                <S.WrapperLabel>Temp. Max</S.WrapperLabel>
              </S.BoxWrapperInformation>
              <S.BoxWrapperInformation>
                <S.WrapperLabelChildren>{tempMin.toFixed(0)}</S.WrapperLabelChildren>
                <S.WrapperLabelChildren>{tempMax.toFixed(0)}</S.WrapperLabelChildren>
              </S.BoxWrapperInformation>

            </S.WrapperOpacity>
          </S.BoxInfoTemperatureDay>

        </S.Container>
      )}
    </>
  );
}

export default Home;