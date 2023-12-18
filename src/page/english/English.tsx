import styled from '@emotion/styled'
import { InfoElement, Txt } from 'components'
import { useEffect, useState } from 'react'

interface dataType {
  id: number
  subject: string
  explanation: string
  linkTo: string
}

const data: dataType[][] = [
  [
    { id: 15, subject: 'Lesson 5', explanation: 'Our Earth, Our Future, Our Choice', linkTo: '/english/1/5' },
    { id: 16, subject: 'Lesson 6', explanation: 'Enjoy Art, Connect Hearts', linkTo: '/english/1/6' },
    { id: 17, subject: 'Lesson 7', explanation: 'Science Everywhere', linkTo: '/english/1/7' },
    { id: 18, subject: 'Lesson 8', explanation: 'Korean Culture: The Mirror of Our Hearts', linkTo: '/english/1/8' },
  ],
  [
    { id: 22, subject: 'Lesson 2', explanation: 'Art Around Us', linkTo: '/english/2/2' },
    { id: 23, subject: 'Lesson 3', explanation: 'Toward a Better Environment', linkTo: '/english/2/3' },
    { id: 24, subject: 'Lesson 4', explanation: 'Living Together', linkTo: '/english/2/4' },
    { id: 25, subject: 'Lesson 5', explanation: 'Cultures as a Mirror of Our Lives', linkTo: '/english/2/5' },
    { id: 26, subject: 'Lesson 6', explanation: 'Technology, What Defines Us as Humans', linkTo: '/english/2/6' },
  ],
  [],
]

const English = () => {
  const [recentEnglish, setRecentEnglish] = useState<dataType[]>([])

  useEffect(() => {
    const item = localStorage.getItem('recent_english')
    if (!item) {
      localStorage.setItem('recent_english', '[]')
    } else {
      item && setRecentEnglish(JSON.parse(item))
    }
  }, [])

  const addRecentEnglish = (dataIndex: number, index: number) => {
    const addData = data[dataIndex][index]
    const english = recentEnglish.filter(v => v.id !== addData.id)
    const result = [{ ...addData }, ...english]
    localStorage.setItem('recent_english', JSON.stringify(result))
    setRecentEnglish(result)
  }

  const removeRecentEnglish = () => {
    localStorage.setItem('recent_english', '[]')
    setRecentEnglish([])
  }

  return (
    <Frame>
      <div>
        {recentEnglish.map(v => (
          <div key={v.id}>{v.explanation}</div>
        ))}
      </div>
      <button onClick={() => removeRecentEnglish()}>최근 기록 초기화</button>
      <br />
      <Txt typography="h1">English</Txt>
      <ListDiv>
        <Txt typography="h3">1st Grade</Txt>
        {data[0].map((value, index) => (
          <div onClick={() => addRecentEnglish(0, index)} key={'1st' + index}>
            <InfoElement {...value} />
          </div>
        ))}
      </ListDiv>
      <ListDiv>
        <Txt typography="h3">2nd Grade</Txt>
        {data[1].map((value, index) => (
          <div onClick={() => addRecentEnglish(1, index)} key={'2nd' + index}>
            <InfoElement {...value} />
          </div>
        ))}
      </ListDiv>
      <ListDiv>
        <Txt typography="h3">3rd Grade</Txt>
        {data[2].map((value, index) => (
          <div onClick={() => addRecentEnglish(2, index)} key={'3rd' + index}>
            <InfoElement {...value} />
          </div>
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
