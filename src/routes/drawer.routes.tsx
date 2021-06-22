import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Home } from '../screens/Home'
import { Search } from '../screens/Search'

export const DrawerRoutes: React.FC = () => {
  const { Navigator, Screen } = createDrawerNavigator()
  return (
    <Navigator>
      <Screen name="Home" component={ Home }/>
      <Screen name="Search" component={ Search }/>
    </Navigator>
  )
}