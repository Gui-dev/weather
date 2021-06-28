import React from 'react'
import { Feather, MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { Container, ConditionGroup, ConditionText } from './style'
import { colors } from '../../styles/colors'

interface IHeaderProps {
  results: {
    condition_slug: string
    currently: string
    humidity: number
    wind_speedy: string
    sunrise: string
    sunset: string
  }
}

export const Condition = ({ results }: IHeaderProps) => {


  return (
    <Container>
      <ConditionGroup>
        <Feather name="wind" size={23} color={colors.fourth}/>
        <ConditionText>{ results.wind_speedy }</ConditionText>
      </ConditionGroup>

      <ConditionGroup>
        <Icon name="weather-sunset-up" size={23} color={colors.fourth}/>
        <ConditionText>{ results.sunrise }</ConditionText>
      </ConditionGroup>

      <ConditionGroup>
        <Icon name="weather-sunset-down" size={23} color={colors.fourth}/>
        <ConditionText>{ results.sunset }</ConditionText>
      </ConditionGroup>

      <ConditionGroup>
        <Feather name="droplet" size={23} color={colors.fourth}/>
        <ConditionText>{ results.humidity }</ConditionText>
      </ConditionGroup>
    </Container>
  )
}
