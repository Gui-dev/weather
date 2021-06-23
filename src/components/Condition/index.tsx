import React from 'react'
import { Feather, MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { Container, ConditionGroup, ConditionText } from './style'
import { colors } from '../../styles/colors'

export const Condition: React.FC = () => {
  return (
    <Container>
      <ConditionGroup>
        <Feather name="wind" size={23} color={colors.fourth}/>
        <ConditionText>7 km/h</ConditionText>
      </ConditionGroup>

      <ConditionGroup>
        <Icon name="weather-sunset-up" size={23} color={colors.fourth}/>
        <ConditionText>5:22 am</ConditionText>
      </ConditionGroup>

      <ConditionGroup>
        <Icon name="weather-sunset-down" size={23} color={colors.fourth}/>
        <ConditionText>6:00 pm</ConditionText>
      </ConditionGroup>

      <ConditionGroup>
        <Feather name="droplet" size={23} color={colors.fourth}/>
        <ConditionText>65</ConditionText>
      </ConditionGroup>
    </Container>
  )
}
