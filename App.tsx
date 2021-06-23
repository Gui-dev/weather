import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'

import Load from './src/components/Load'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold
  })

  if (!fontsLoaded) {
    return <Load />
  }

  return (
    <>
      <StatusBar style="light" hidden={ true }/>
      <Routes/>
    </>
  )
}
