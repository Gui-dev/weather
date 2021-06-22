import React from 'react'

import { colors } from './../../styles/colors'
import { Container } from './style'

export const Background: React.FC = ({ children }) => {
  return (
    <Container
      start={{ x: .79, y: .75 }}
      end={{ x: .85, y: .95 }}
      colors={[colors.primary, colors.third]}
    >
      { children }
    </Container>
  )
}