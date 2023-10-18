import styled from '@emotion/styled'
import { InfoElement, Txt } from 'components'

const data = [
  { subject: 'Lesson4', explanation: 'Living Together', linkTo: '/english/4' },
  { subject: 'Lesson5', explanation: 'Cultures as a Mirror of Our Lives', linkTo: '/english/5' },
]

const English = () => {
  return (
    <Frame>
      <Txt typography="h1">English</Txt>
      <ListDiv>
        {data.map((value, index) => (
          <InfoElement {...value} key={index} />
        ))}
      </ListDiv>
    </Frame>
  )
}

export default English

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 40px 0;
`
const Frame = styled.div`
  padding: 40px 0 160px;
  min-height: 80vh;
`
