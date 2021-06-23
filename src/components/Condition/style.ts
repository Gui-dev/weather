import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin-top: 15px;
  padding: 10px;
  background-color: ${colors.white};
  border-radius: 8px;
`

export const ConditionGroup = styled.View`
  align-items: center;
  justify-content: center;
`

export const ConditionText = styled.Text`
  font-family: ${fonts.normal};
  color: ${colors.dark}
`
