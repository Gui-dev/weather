import React from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import { Container } from './style'

export const Menu: React.FC = () => {
  const navigation = useNavigation<any>()

  return (
    <Container
      onPress={ () => navigation.toggleDrawer() }
      style={{
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
          height: 3,
          width: 1
        }
      }}
    >
      <Feather name="menu" size={36} color="#373737"/>
    </Container>
  )
}
