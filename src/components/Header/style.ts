import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { fonts } from '../../styles/fonts'
import { colors } from '../../styles/colors'

export const Container = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 15px 0;
  border-radius: 8px;
`

export const Date = styled.Text`
  font-size: 17px;
  font-family: ${fonts.normal};
  color: ${colors.white};
`

export const City = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  font-family: ${fonts.title};
  margin-top: 5px;
`

export const Degrees = styled.Text`
  font-size: 80px;
  font-family: ${fonts.title};
  color: ${colors.white};
`
