import React, { useState } from 'react';
import Input from '../../components/Input';

import * as  S from './styles';

const Home: React.FC = () => {

  const [searchCity, setSearchCity] = useState('');

  return (
    <S.Container>
      <S.BoxLabelNoCities>
        <S.LabelBold>Parece que você ainda não adicionou uma cidade. 😕</S.LabelBold>
        <S.LabelNormal>
          Adicione uma cidade acessando o campo "cidades" na parte inferior do aplicativo, caso ache viável digite o nome da mesma na barra de busca.
          </S.LabelNormal>
      </S.BoxLabelNoCities>
    </S.Container>
  );
}

export default Home;