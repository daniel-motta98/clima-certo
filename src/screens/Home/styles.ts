import { FlatList } from "react-native";
import styled from "styled-components/native";
import themes from "../../global/themes";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ImageCustom = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%; 
`;

export const BoxContentHeader = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const WrapperOpacity = styled.View`
  background-color: 'rgba(0, 0, 0, 0.3)';
  align-items: center;
  border-radius: 15px;
`;

export const BoxInfoCurrentTemperature = styled.View`
  flex-direction: row;
`;

export const LabelCurrentTemperature = styled.Text`
  font-size: 60px;
  color: ${themes.colors.constrast0};
`;

export const LabelTypeTemperature = styled.Text`
  color: ${themes.colors.constrast0};
  font-size: 25px;
  margin: 10px;
`; 

export const LabelCity = styled.Text`
  color: ${themes.colors.constrast0};
  font-size: 16px;  
`;

export const BoxInfoTemperatureDay = styled.View``;

export const LabelInformations = styled.Text`
  color: ${themes.colors.constrast0};
  font-size: 20px;
  margin-top: 20px;
`;

export const BoxWrapperInformation = styled.View`
  flex-direction: row;
  margin: 20px;
`;

export const WrapperLabel = styled.Text`
  color: ${themes.colors.neutral100};
  font-size: 20px;
  flex: 1;
  text-align: center;

`;
export const WrapperLabelChildren = styled.Text`
  color: ${themes.colors.neutral100};
  font-size: 20px;
  margin-top: -40px;
  flex: 1;
  text-align: center;
`;

export const BoxInfoTemperature = styled.View`
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
export const ImageIcon = styled.Image`
  height: 150px;
  width: 150px;
`;

export const BoxImageIcon = styled.View``;

export const BoxLoading = styled.View`
flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingCustom = styled.ActivityIndicator``;

export const LabelLoading = styled.Text`
  color: ${themes.colors.neutral500}
`;