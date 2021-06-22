import React from 'react'

import { colors } from './../../styles/colors'
import { BackgroundContainer } from './style'

export const Background: React.FC = ({ children }) => {
  return (
    <BackgroundContainer
      start={{ x: .79, y: .75 }}
      end={{ x: .85, y: .95 }}
      colors={[colors.primary, colors.third]}
    >
      { children }
    </BackgroundContainer>
  )
}
