import React, { useState } from 'react'
import { Alert, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { Background } from './../../components/Background'
import { colors } from '../../styles/colors'
import { api } from '../../services/api'
import { ISearchProps } from './ISearchProps'
import { Condition } from './../../components/Condition'
import {
  Container, Back, BackText, SearchBox, SearchInput, SearchButton,
  CityBox, CityDate, CityTitle, CityTemperature
} from './style'

export const Search: React.FC = () => {
  const { goBack } = useNavigation()
  const [inputCity, setInputCity] = useState('')
  const [city, setCity] = useState<ISearchProps | null>()

  const handleNavigation = () => {
    goBack()
  }

  const handleSubmit = async () => {
    if (!inputCity) {
      return Alert.alert('Oooops, cidade não informada', 'Você deve informar uma cidade e estado')
    }
    const { data } = await api.get('/weather', {
      params: {
        key: '47c71162',
        city_name: inputCity
      }
    })

    if (data.by === 'default') {
      setInputCity('')
      setCity(null)
      Keyboard.dismiss()
      return Alert.alert('Oooops, cidade não encontrada', 'Informe uma cidade e estado válidos')
    }

    setCity(data)
    setInputCity('')
    Keyboard.dismiss()
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
          <SearchButton onPress={ handleSubmit }>
            <Feather name="search" size={32} color={colors.white}/>
          </SearchButton>
        </SearchBox>


        {city && (
          <CityBox
            colors={[colors.fourth, colors.fifth]}
          >
            <CityDate>{ city?.results.date }</CityDate>
            <CityTitle>{ city?.results.city_name }</CityTitle>
            <CityTemperature>{ city?.results.temp }°</CityTemperature>

            <Condition results={city?.results}/>
          </CityBox>
        )}

      </Container>
    </Background>
  )
}
