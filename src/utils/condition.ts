import { Ionicons  } from '@expo/vector-icons'
import { colors } from '../styles/colors'

type IconProps = {
  name: string,
  color: string
}

export const condition = (condition: string) => {
  let icon = {} as IconProps

  switch (condition) {
    case 'storm':
      return icon = {
        name: 'rainy-outline',
        color: `${colors.fourth}`
      }

    case 'clear_day':
      return icon = {
        name: 'partly-sunny-outline',
        color: `${colors.sun}`
      }

    case 'rain':
      return icon = {
        name: 'rainy-outline',
        color: `${colors.fourth}`
      }

    default:
      return icon = {
        name: 'cloud-outline',
        color: `${colors.fourth}`
      }
  }
}
