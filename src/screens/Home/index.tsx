import React, { useState } from 'react';
import Input from '../../components/Input';

import * as  S from './styles';

const Home: React.FC = () => {

  const [searchCity, setSearchCity] = useState('');

  return (
    <S.Container>
      <S.BoxHeader>
          <Input placeholder='Pesquise pelo nome da cidade' value={searchCity} onChangeText={text => setSearchCity(text)} nameIcon={'search'} colorIcon={'#000'} sizeIcon={32} />
      </S.BoxHeader>
    </S.Container>
  );
}

export default Home;