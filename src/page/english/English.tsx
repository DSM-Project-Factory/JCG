import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Txt } from 'components'
import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface dataType {
  id: number
  subject: string
  explanation?: string
  linkTo?: string
  img?: string
}

export const englishData: dataType[][] = [
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
      img: 'https://images.squarespace-cdn.com/content/v1/5a94fbc01aef1de0742e8809/1585869321676-JLC6L3VFV95BMHVPF5Z4/ooho-notpla.jpg?format=1000w',
    },
    {
      id: 24,
      subject: 'Lesson 4',
      explanation: 'Living Together',
      linkTo: '/english/2/4',
      img: 'https://image6.zibster.com/8933/3_20210304081705_24834925_large.jpg',
    },
    {
      id: 25,
      subject: 'Lesson 5',
      explanation: 'Cultures as a Mirror of Our Lives',
      linkTo: '/english/2/5',
      img: 'https://t1.daumcdn.net/cfile/blog/137C44124CBEE654C0',
    },
    {
      id: 26,
      subject: 'Lesson 6',
      explanation: 'Technology, What Defines Us as Humans',
      linkTo: '/english/2/6',
      img: 'https://sfgirlnet.files.wordpress.com/2016/07/irobot-sonny.jpg?w=640',
    },
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
    const addData = englishData[dataIndex][index]
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
              {v.img ? <Image loading="lazy" src={v.img} /> : <Skeleton width={180} height={180} />}
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
      <ListDiv>
        <Txt typography="h1">1st Grade</Txt>
        <Horizontal>
          {englishData[0].map((v, index) => (
            <>
              {v.linkTo && (
                <ItemBox
                  key={v.id}
                  onClick={() => {
                    addRecentEnglish(0, index)
                    v.linkTo && navigate(v.linkTo)
                  }}
                >
                  {v.img ? <Image loading="lazy" src={v.img} /> : <Skeleton width={180} height={180} />}
                  <TxtBox>
                    <Txt typography="p2">{v.explanation}</Txt>
                    <Txt typography="p4" color="--gray500">
                      {`Grade 1 ${v.subject}`}
                    </Txt>
                  </TxtBox>
                </ItemBox>
              )}
            </>
          ))}
        </Horizontal>
      </ListDiv>
      <ListDiv>
        <Txt typography="h1">2nd Grade</Txt>
        <Horizontal>
          {englishData[1].map((v, index) => (
            <>
              {v.linkTo && (
                <ItemBox
                  key={v.id}
                  onClick={() => {
                    addRecentEnglish(1, index)
                    v.linkTo && navigate(v.linkTo)
                  }}
                >
                  {v.img ? <Image loading="lazy" src={v.img} /> : <Skeleton width={180} height={180} />}
                  <TxtBox>
                    <Txt typography="p2">{v.explanation}</Txt>
                    <Txt typography="p4" color="--gray500">
                      {`Grade 2 ${v.subject}`}
                    </Txt>
                  </TxtBox>
                </ItemBox>
              )}
            </>
          ))}
        </Horizontal>
      </ListDiv>
      <ListDiv>
        <Txt typography="h1">3rd Grade</Txt>
        <Horizontal>
          {englishData[2].map((v, index) => (
            <>
              {v.linkTo && (
                <ItemBox
                  key={v.id}
                  onClick={() => {
                    addRecentEnglish(2, index)
                    v.linkTo && navigate(v.linkTo)
                  }}
                >
                  {v.img ? <Image loading="lazy" src={v.img} /> : <Skeleton width={180} height={180} />}
                  <TxtBox>
                    <Txt typography="p2">{v.explanation}</Txt>
                    <Txt typography="p4" color="--gray500">
                      {`Grade 3 ${v.subject}`}
                    </Txt>
                  </TxtBox>
                </ItemBox>
              )}
            </>
          ))}
        </Horizontal>
      </ListDiv>
    </Frame>
  )
}

export default English

const Loading = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const Skeleton = styled.div<{ width: number; height: number }>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 8px;
  background: linear-gradient(to right, var(--gray700) 40%, var(--gray600) 50%, var(--gray700) 60%);
  background-size: 300% auto;
  animation: ${Loading} 1.2s ease-out infinite;
`
const Image = styled.img`
  width: 180px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background-color: var(--gray700);
  object-fit: cover;
  transition: 0.3s;
`
const ItemBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 180px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    article {
      transform: translateY(-4px);
    }
    img {
      filter: contrast(160%);
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
  overflow: hidden;
  overflow-x: scroll;
  position: relative;

  ::-webkit-scrollbar {
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
