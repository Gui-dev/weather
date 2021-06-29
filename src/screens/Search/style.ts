import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: 10%;
`

export const Back = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  align-self: flex-start;
  flex-direction: row;
  margin-left: 10px;
  margin-bottom: 10px;
`

export const BackText = styled.Text`
  align-self: center;
  font-size: 20px;
  font-family: ${fonts.title};
  color: ${colors.white};
`

export const SearchBox = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 50px;
  width: 90%;
  background-color: ${colors.white};
  border-radius: 8px;
`

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: colors.dark
})`
  font-size: 20px;
  font-family: ${fonts.normal};
  color: ${colors.dark};
  height: 50px;
  width: 75%;
  padding-left: 10px;
`

export const SearchButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 15%;
  background-color: ${colors.sun};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`
