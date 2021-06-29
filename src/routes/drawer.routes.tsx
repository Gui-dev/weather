import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Home } from '../screens/Home'
import { Search } from '../screens/Search'
import { colors } from '../styles/colors'

export const DrawerRoutes: React.FC = () => {
  const { Navigator, Screen } = createDrawerNavigator()
  return (
    <Navigator
      drawerStyle={{
        backgroundColor: colors.fourth,
      }}
    >
      <Screen
        name="Home"
        component={ Home }
        options={{
          drawerLabel: 'Minha cidade',

        }}
      />
      <Screen
        name="Search"
        component={ Search }
        options={{
          drawerLabel: 'Procurar'
        }}
      />
    </Navigator>
  )
}
