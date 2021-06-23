import React from 'react'

import { Background } from './../../components/Background'
import { Menu } from '../../components/Menu'
import { Header } from '../../components/Header'
import { Container } from './style'

export const Home: React.FC = () => {
  return (
    <Background>
      <Container>
        <Menu />
        <Header />
      </Container>
    </Background>
  )
}
