import styled from "styled-components/native";
import themes from "../../global/themes";

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

export const CurrentTemperature = styled.Text`
    flex: 1;
    text-align: right;
    font-size: 40px;
    color: ${themes.colors.warning200};
`;

export const LabelSubtitle = styled.Text`
  font-size: 16px;
  color: ${themes.colors.neutral700};
  margin-top: -15px;
`;


export const BoxLabelTypeRainAndButtonAdd = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const LabelTypeRain = styled.Text`
  color: ${themes.colors.warning200};
  font-size: 16px;
  flex: 1;
  margin-top: 10px;
`;


export const LabelMinAndMaxForecast = styled.Text`
  margin-top: 10px;
  color: ${themes.colors.neutral500};
`;

export const CustomButtonAddCity = styled.TouchableOpacity``;

export const LabelAdd = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${themes.colors.primary};
  text-align: right;
`;

export const BoxNextForecast = styled.TouchableOpacity``;

export const LabelNextForecast = styled.Text`
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
  color: ${themes.colors.primary};
`;
