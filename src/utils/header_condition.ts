import { Ionicons  } from '@expo/vector-icons'
import { colors } from '../styles/colors'

type IconProps = {
  name: string,
  color: string
}

export const headerCondition = (condition: string) => {
  let icon = {} as IconProps

  switch (condition) {
    case 'storm':
      return icon = {
        name: 'rainy',
        color: `${colors.white}`
      }

    case 'clear_day':
      return icon = {
        name: 'partly-sunny',
        color: `${colors.sun}`
      }

    case 'rain':
      return icon = {
        name: 'rainy',
        color: `${colors.white}`
      }

    default:
      return icon = {
        name: 'cloud',
        color: `${colors.white}`
      }
  }
}
