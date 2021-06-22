import React from 'react'
import { Text } from 'react-native'

import { Background } from './../../components/Background'

import { Container } from './style'

export const Home: React.FC = () => {
  return (
    <Background>
      <Container>
        <Text>Home</Text>
      </Container>
    </Background>
  )
}
