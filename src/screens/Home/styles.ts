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
