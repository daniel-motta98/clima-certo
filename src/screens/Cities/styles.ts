import { FlatList } from "react-native";
import styled from "styled-components/native";

import Icon from 'react-native-vector-icons/AntDesign';

import themes from "../../global/themes";

export const Container = styled.SafeAreaView`
flex: 1;
`;

export const ImageCustom = styled.Image`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%; 
`;

export const BoxCities = styled.View`
  border-radius: 10px;
  background-color: ${themes.colors.constrast0};
  padding: 15px;
  background-color: 'rgba(0, 0, 0, 0.3)';
  margin: 20px;
  top: -420px;
`;

export const BoxCitiesFavorite = styled.View`
  border-radius: 10px;
  background-color: ${themes.colors.constrast0};
  padding: 15px;
  /* background-color: 'rgba(253, 220, 220, 0.3)'; */
  background-color: 'rgba(0, 0, 0, 0.3)';
  margin: 20px;
  top: -420px;
`;
export const BoxLabelNameCityAndForecast = styled.View`
  flex-direction: row;
`;

export const LabelNameCity = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${themes.colors.constrast0};
`;

export const LabelSubtitle = styled.Text`
  font-size: 16px;
  color: ${themes.colors.danger200};
  margin-top: -15px;
`;


export const BoxLabelTypeRainAndButtonAdd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CustomButtonAddCity = styled.TouchableOpacity``;

export const CustomIcon = styled(Icon)``;

export const BoxIconFavorite = styled.View`
  margin-right: 20px;
`;

export const LabelFavorite = styled.Text`
  font-size: 20px;
  color: ${themes.colors.danger200};
`;

export const LabelForecast = styled.Text`
    flex: 1;
    text-align: right;
    font-size: 40px;
    color: ${themes.colors.warning300};
`;

export const LabelTypeRain = styled.Text`
  color: ${themes.colors.warning300};
  font-size: 16px;

`;

export const LabelMinAndMaxForecast = styled.Text`
  color: ${themes.colors.constrast0};
  flex: 1;
`;

export const FlatListCustom = styled(FlatList)``;


export const BoxNextForecastFavorite = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxNextForecast = styled.TouchableOpacity``;

export const LabelNextForecast = styled.Text`
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
  color: ${themes.colors.primary};
  flex: 1;
`;

export const CurrentTemperature = styled.Text`
    flex: 1;
    text-align: right;
    font-size: 40px;
    color: ${themes.colors.warning200};
`;

