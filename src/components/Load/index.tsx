import React from 'react'
import LottieView from 'lottie-react-native'

import weatherLoad from './../../assets/weather-load.json'
import { Container } from './style'

export const Load: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={ weatherLoad }
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'transparent'
        }}
      />
    </Container>
  );
}
