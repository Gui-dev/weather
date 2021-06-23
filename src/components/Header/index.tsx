import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { colors } from '../../styles/colors'
import { Container, Date, City, Degrees } from './style'

export const Header: React.FC = () => {
  return (
    <Container
      colors={[colors.fourth, colors.fifth]}
    >
      <Date>23/06/2021</Date>
      <City>São Paulo</City>
      <Ionicons name="cloud" size={150} color="#FFF"/>
      <Degrees>30°</Degrees>
    </Container>
  )
}
