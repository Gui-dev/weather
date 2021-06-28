import React, { useEffect, useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import * as Location from 'expo-location'
import axios from 'axios'

import { Background } from './../../components/Background'
import { Menu } from '../../components/Menu'
import { Header } from '../../components/Header'
import { Condition } from '../../components/Condition'
import { WeatherList } from '../../components/WeatherList'
import { Load } from '../../components/Load'
import { api } from '../../services/api'
import { IWeatherProps } from './IWeatherProps'
import { Container } from './style'

export const Home: React.FC = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  })
  const [weather, setWeather] = useState<IWeatherProps | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const position = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        Alert.alert('Permissão Negada', 'Você precisa da permissão para Locaização')
        setLoading(false)
        return
      }

      const locationResult = await Location.getCurrentPositionAsync({})
      setLocation({
        latitude: locationResult.coords.latitude,
        longitude: locationResult.coords.longitude
      })
      const { data } = await api.get('/weather', {
        params: {
          key: '47c71162',
          lat: location.latitude,
          lon: location.longitude
        }
      })
      setWeather(data)
      setLoading(false)
    }

    position()
  }, [])

  if (loading) {
    return <Load />
  }

  return (
    <Background>
      <ScrollView>
        <Container>
          <Menu />
          <Header results={ weather?.results }/>
          <Condition results={ weather?.results }/>
          <WeatherList weather={ weather }/>
        </Container>
      </ScrollView>
    </Background>
  )
}
