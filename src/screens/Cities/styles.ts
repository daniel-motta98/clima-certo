import { FlatList } from "react-native";
import styled from "styled-components/native";

import Icon from 'react-native-vector-icons/AntDesign';

import themes from "../../global/themes";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 10px;
`;

export const BoxHeader = styled.View`
  background-color: ${themes.colors.primary};
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  `;

 export const BoxLabelNoCities = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
 `;
export const LabelBold = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: ${themes.colors.constrast1000};
`;
export const LabelNormal  = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  color: ${themes.colors.neutral300}; 
`;

export const BoxCities = styled.View`
  border: 2px  ${themes.colors.neutral300};;
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${themes.colors.constrast0};
  padding: 15px;
`;

export const BoxLabelNameCityAndForecast = styled.View`
  flex-direction: row;
`;

export const LabelNameCity = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${themes.colors.constrast1000};
`;

export const LabelCountry = styled.Text`
  font-size: 16px;
  color: ${themes.colors.neutral700};
  margin-top: -20px;
`;

export const BoxLabelTypeRainAndButtonAdd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CustomButtonAddCity = styled.TouchableOpacity`
  flex: 1;
`;

export const CustomIcon = styled(Icon)``;

export const LabelAdd = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${themes.colors.primary};
  text-align: right;
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
  margin-top: -10px;
  color: ${themes.colors.neutral500};
`;

export const FlatListCustom = styled(FlatList)``;