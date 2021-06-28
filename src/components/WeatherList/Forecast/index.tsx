import React, { useState } from 'react'
import { Ionicons  } from '@expo/vector-icons'

import { condition } from '../../../utils/condition'
import { Container, Date, Prediction, Min, Max } from './style'
import { colors } from '../../../styles/colors'

interface IForecastProps {
  // state: {
  //   city: string
  //   city_name: string
  //   condition_code: string
  //   condition_slug: string
  //   currently: string
  //   date: string
  //   description: string
  //   forecast: [{
  //     condition: string
  //     date: string
  //     description: string
  //     max: number
  //     min: number
  //     weekday: string
  //   }]
  // },
  item: {
    date: string
    weekday: string
    max: number
    min: number
    description: string
    condition: string
  }
}

export const Forecast = ({ item }: IForecastProps) => {

  let icon = condition(item.condition)

  return (
    <Container>
      <Date>{ item.date }</Date>
      <Ionicons name={icon.name} size={25} color={ icon.color }/>

      <Prediction>
        <Min>{ item.min }°</Min>
        <Max>{ item.max }°</Max>
      </Prediction>
    </Container>
  )
}
