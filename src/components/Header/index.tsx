import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

import { colors } from '../../styles/colors'
import { Container, Date, City, Degrees } from './style'
import { headerCondition } from '../../utils/header_condition'

interface IHeaderProps {
  results: {
    temp: string
    city: string
    city_name: string
    condition_code: string
    condition_slug: string
    currently: string
    date: string
    description: string
  }
}

export const Header = ({ results }: IHeaderProps) => {
  const [icon, setIcon] = useState({ name: 'cloud', color: '#FFF' })
  const [background, setBackground] = useState([colors.fourth, colors.fifth])

  useEffect(() => {
    if (results.currently === 'noite') {
      setBackground([colors.night_dark, colors.night_light])
    }
    const iconResult = headerCondition(results.condition_slug)
    setIcon(iconResult)
  }, [])

  return (
    <Container
      colors={background}
    >
      <Date>{ results.date }</Date>
      <City>{ results.city_name }</City>
      <Ionicons name={icon.name} size={150} color={icon.color}/>
      <Degrees>{ results.temp }°</Degrees>
    </Container>
  )
}
