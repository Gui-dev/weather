import React from 'react'
import { Forecast } from './Forecast'

import { Container } from './style'

export const WeatherList: React.FC = () => {
  const list = [
  {
    "date": "06-24",
    "weekday": "Thu",
    "max": 24,
    "min": 11,
    "description": "Day mostly cloudy",
    "condition": "cloudly_day"
  },
  {
    "date": "06-25",
    "weekday": "Fri",
    "max": 27,
    "min": 15,
    "description": "Night Mostly cloudy",
    "condition": "clear_day"
  },
  {
    "date": "06-26",
    "weekday": "Sat",
    "max": 27,
    "min": 15,
    "description": "Night Mostly cloudy",
    "condition": "clear_day"
  },
  {
    "date": "06-27",
    "weekday": "Sun",
    "max": 28,
    "min": 16,
    "description": "Night partly cloudy",
    "condition": "cloudly_day"
  },
  {
    "date": "06-28",
    "weekday": "Mon",
    "max": 19,
    "min": 15,
    "description": "Scattered showers",
    "condition": "rain"
  },
  {
    "date": "06-29",
    "weekday": "Tue",
    "max": 14,
    "min": 12,
    "description": "Scattered showers",
    "condition": "rain"
  },
  {
    "date": "06-30",
    "weekday": "Wed",
    "max": 13,
    "min": 12,
    "description": "Scattered showers",
    "condition": "rain"
  },
  {
    "date": "07-01",
    "weekday": "Thu",
    "max": 15,
    "min": 12,
    "description": "Thundershowers",
    "condition": "rain"
  },
  {
    "date": "07-02",
    "weekday": "Fri",
    "max": 21,
    "min": 12,
    "description": "Scattered showers",
    "condition": "rain"
  },
  {
    "date": "07-03",
    "weekday": "Sat",
    "max": 23,
    "min": 13,
    "description": "Night Mostly cloudy",
    "condition": "clear_day"
  }
]
  return (
    <Container
      data={ list }
      keyExtractor={(item: any) => String(item.date)}
      renderItem={({ item }: any) => {
        return (
          <Forecast item={ item }/>
        )
      }}
    />
  )
}
