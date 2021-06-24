import styled from 'styled-components/native'
import { colors } from '../../../styles/colors'
import { fonts } from '../../../styles/fonts'

export const Container = styled.View`
  align-items: center;
  justify-content: space-around;
  margin-left: 12px;
  padding: 10px 14px 10px 14px;
  background-color: ${colors.white};
  border-radius: 8px;
`

export const Date = styled.Text`
  font-size: 14px;
  font-family: ${fonts.normal};
  color: ${colors.dark};
  margin-bottom: 10px;
`

export const Prediction = styled.View`
  align-items: center;
  margin-top: 10px;
`

export const Min = styled.Text`
  font-size: 16px;
  font-family: ${fonts.normal};
  color: ${colors.dark};
`

export const Max = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title};
  color: ${colors.dark}
`
