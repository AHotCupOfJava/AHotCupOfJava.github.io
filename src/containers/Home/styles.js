import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.primary ? props.theme.titleColor : props.theme.textColor};
  text-align: center;
  font-style: bold;
  font-size: ${props => props.primary ? props.theme.size.title : props.theme.size.subtitle};
  font-family: ${({theme}) => theme.font};
`

export const Subtitle = styled(Title)`
  font-style: italic;
  font-size: ${({theme}) => theme.size.subtitle};
  color: ${({theme}) => theme.titleColor};
`

export const Page = styled.div`
  background-color: ${({theme}) => theme.pageColor};
  /* background: url('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png') */
`