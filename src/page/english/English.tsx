import styled from '@emotion/styled'
import { InfoElement, Txt } from 'components'

const data = [
  [
    { subject: 'Lesson 5', explanation: 'Our Earth, Our Future, Our Choice', linkTo: '/english/1/5' },
    { subject: 'Lesson 6', explanation: 'Enjoy Art, Connect Hearts', linkTo: '/english/1/6' },
    { subject: 'Lesson 7', explanation: 'Science Everywhere', linkTo: '/english/1/7' },
    { subject: 'Lesson 8', explanation: 'Korean Culture: The Mirror of Our Hearts', linkTo: '/english/1/8' },
  ],
  [
    { subject: 'Lesson 2', explanation: 'Art Around Us', linkTo: '/english/2/2' },
    { subject: 'Lesson 3', explanation: 'Toward a Better Environment', linkTo: '/english/2/3' },
    { subject: 'Lesson 4', explanation: 'Living Together', linkTo: '/english/2/4' },
    { subject: 'Lesson 5', explanation: 'Cultures as a Mirror of Our Lives', linkTo: '/english/2/5' },
    { subject: 'Lesson 6', explanation: 'Technology, What Defines Us as Humans', linkTo: '/english/2/6' },
  ],
  [],
]

const English = () => {
  return (
    <Frame>
      <Txt typography="h1">English</Txt>
      <ListDiv>
        <Txt typography="h3">1st Grade</Txt>
        {data[0].map((value, index) => (
          <InfoElement {...value} key={'1st' + index} />
        ))}
      </ListDiv>
      <ListDiv>
        <Txt typography="h3">2nd Grade</Txt>
        {data[1].map((value, index) => (
          <InfoElement {...value} key={'2nd' + index} />
        ))}
      </ListDiv>
      <ListDiv>
        <Txt typography="h3">3rd Grade</Txt>
        {data[2].map((value, index) => (
          <InfoElement {...value} key={'3rd' + index} />
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
