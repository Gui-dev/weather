import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { Background } from './../../components/Background'
import { colors } from '../../styles/colors'
import { api } from '../../services/api'
import { ISearchProps } from './ISearchProps'
import { Container, Back, BackText, SearchBox, SearchInput, SearchButton } from './style'

export const Search: React.FC = () => {
  const { goBack } = useNavigation()
  const [inputCity, setInputCity] = useState('')
  const [city, setCity] = useState<ISearchProps>()

  const handleNavigation = () => {
    goBack()
  }



  return (
    <Background>
      <Container>
        <Back onPress={ handleNavigation }>
          <Feather name="chevron-left" size={42} color={colors.white}/>
          <BackText>Voltar</BackText>
        </Back>

        <SearchBox>
          <SearchInput
            placeholder="Ex: São Paulo, SP"
            value={ inputCity }
            onChangeText={ setInputCity }
          />
          <SearchButton>
            <Feather name="search" size={32} color={colors.white}/>
          </SearchButton>
        </SearchBox>
      </Container>
    </Background>
  )
}
