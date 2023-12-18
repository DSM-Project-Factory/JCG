import styled from '@emotion/styled'
import { InfoElement, Txt } from 'components'
import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface dataType {
  id: number
  subject: string
  explanation?: string
  linkTo?: string
  img?: string
}

const data: dataType[][] = [
  [
    { id: 11, subject: 'Lesson 1' },
    { id: 12, subject: 'Lesson 2' },
    { id: 13, subject: 'Lesson 3' },
    { id: 14, subject: 'Lesson 4' },
    { id: 15, subject: 'Lesson 5', explanation: 'Our Earth, Our Future, Our Choice', linkTo: '/english/1/5' },
    { id: 16, subject: 'Lesson 6', explanation: 'Enjoy Art, Connect Hearts', linkTo: '/english/1/6' },
    { id: 17, subject: 'Lesson 7', explanation: 'Science Everywhere', linkTo: '/english/1/7' },
    { id: 18, subject: 'Lesson 8', explanation: 'Korean Culture: The Mirror of Our Hearts', linkTo: '/english/1/8' },
  ],
  [
    { id: 21, subject: 'Lesson 1' },
    {
      id: 22,
      subject: 'Lesson 2',
      explanation: 'Art Around Us',
      linkTo: '/english/2/2',
      img: 'https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/rousseau_snake_charmer.width-600.jpg',
    },
    {
      id: 23,
      subject: 'Lesson 3',
      explanation: 'Toward a Better Environment',
      linkTo: '/english/2/3',
      img: 'https://thepetridish.my/wp-content/uploads/2017/05/ooho-edible-water-bottle.jpg',
    },
    { id: 24, subject: 'Lesson 4', explanation: 'Living Together', linkTo: '/english/2/4' },
    { id: 25, subject: 'Lesson 5', explanation: 'Cultures as a Mirror of Our Lives', linkTo: '/english/2/5' },
    { id: 26, subject: 'Lesson 6', explanation: 'Technology, What Defines Us as Humans', linkTo: '/english/2/6' },
    { id: 27, subject: 'Lesson 7' },
    { id: 28, subject: 'Lesson 8' },
  ],
  [
    { id: 31, subject: 'Lesson 1' },
    { id: 32, subject: 'Lesson 2' },
    { id: 33, subject: 'Lesson 3' },
    { id: 34, subject: 'Lesson 4' },
    { id: 35, subject: 'Lesson 5' },
    { id: 36, subject: 'Lesson 6' },
    { id: 37, subject: 'Lesson 7' },
    { id: 38, subject: 'Lesson 8' },
  ],
]

const English = () => {
  const [recentEnglish, setRecentEnglish] = useState<dataType[]>([])
  const navigate = useNavigate()

  useLayoutEffect(() => {
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
      <ListDiv>
        <Txt typography="h1">다시 풀기</Txt>
        <Horizontal>
          {recentEnglish.map(v => (
            <ItemBox
              key={v.id}
              onClick={() => {
                addRecentEnglish(+`${v.id}`.slice(0, 1) - 1, +`${v.id}`.slice(1) - 1)
                v.linkTo && navigate(v.linkTo)
              }}
            >
              <Image src={v.img} />
              <TxtBox>
                <Txt typography="p2">{v.explanation}</Txt>
                <Txt typography="p4" color="--gray500">
                  {`Grade ${Math.floor(v.id / 10)} ${v.subject}`}
                </Txt>
              </TxtBox>
            </ItemBox>
          ))}
        </Horizontal>
      </ListDiv>
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

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background-color: var(--gray700);
  object-fit: cover;
  transition: 0.3s;
`
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 20%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    div {
      transform: translateY(-8px);
    }
    img {
      transform: scale(0.9);
    }
  }
`
const TxtBox = styled(ItemBox)`
  gap: 4px;
  width: 100%;
`
const Horizontal = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0%;
    height: 0;
  }
`
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
