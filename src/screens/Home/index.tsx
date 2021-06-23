import React from 'react'

import { Background } from './../../components/Background'
import { Menu } from '../../components/Menu'
import { Container } from './style'

export const Home: React.FC = () => {
  return (
    <Background>
      <Container>
        <Menu />
      </Container>
    </Background>
  )
}
