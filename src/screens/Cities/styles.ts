import styled from "styled-components/native";
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
`;
export const LabelNormal  = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;