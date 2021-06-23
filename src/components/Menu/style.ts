import styled from 'styled-components/native'
import { colors } from '../../styles/colors'

export const Container = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 15px;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  background-color: ${colors.white};
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  z-index: 2;
`
