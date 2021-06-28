import React from 'react'
import { Forecast } from './Forecast'

import { IWeatherProps } from './../../screens/Home/IWeatherProps'
import { Container } from './style'

interface IWeatherListProps {
  weather: {
    results: {
      city: string
      city_name: string
      condition_code: string
      condition_slug: string
      currently: string
      date: string
      description: string
      forecast: [{
        condition: string
        date: string
        description: string
        max: number
        min: number
        weekday: string
      }]
    }
  }
}

export const WeatherList= ({ weather }: IWeatherListProps) => {

  return (
    <Container
      data={ weather.results.forecast }
      keyExtractor={(item: any) => String(item.date)}
      renderItem={({ item }: any) => {
        return (
          <Forecast item={ item }/>
        )
      }}
    />
  )
}
