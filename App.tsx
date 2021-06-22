import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Background } from './src/components/Background'
import { Routes } from './src/routes'

export default function App() {
  return (
    <Background>
      <StatusBar style="light" />
      <Routes/>
    </Background>
  );
}
