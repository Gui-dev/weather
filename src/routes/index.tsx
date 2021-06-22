import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { DrawerRoutes } from './drawer.routes'

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
}