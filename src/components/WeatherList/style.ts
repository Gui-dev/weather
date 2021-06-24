import styled from 'styled-components/native'

export const Container = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: '5%',
    marginLeft: 10
  }
})`
  margin-top: 15px;
`
