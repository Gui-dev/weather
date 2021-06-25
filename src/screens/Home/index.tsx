import React from 'react'
import { ScrollView } from 'react-native'

import { Background } from './../../components/Background'
import { Menu } from '../../components/Menu'
import { Header } from '../../components/Header'
import { Condition } from '../../components/Condition'
import { WeatherList } from '../../components/WeatherList'
import { Container } from './style'

export const Home: React.FC = () => {
  return (
    <Background>
      <ScrollView>
        <Container>
          <Menu />
          <Header />
          <Condition />
          <WeatherList />
        </Container>
      </ScrollView>
    </Background>
  )
}
