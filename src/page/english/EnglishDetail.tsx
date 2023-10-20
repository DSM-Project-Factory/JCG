import { Icon, Txt } from 'components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { englishType } from 'types'
import { lesson4 } from 'assets/english'
import styled from '@emotion/styled'
import { colors } from 'constant'

const EnglishDetail = () => {
  const [data, setData] = useState<englishType[]>()
  const [index, setIndex] = useState<number>(0)
  const [collect, setCollect] = useState<number>(0)
  const [isWord, setIsWord] = useState<boolean>(true)
  const [answer, setAnswer] = useState<string>('')

  const { id } = useParams()

  const initData = () => {
    setIsWord(false)
    setIndex(0)
    setCollect(0)
    if (id && id === '4') {
      setData(lesson4.sort(() => 0.5 - Math.random()))
    }
  }

  useEffect(() => {
    initData()
  }, [id, isWord])

  const collected = () => {
    console.log('you collected!')
    setAnswer('')
    setCollect(prev => prev + 1)
    if (index + 1 === data?.length) {
      initData()
    } else {
      setIndex(prev => prev + 1)
    }
  }

  const compareAnswer = () => {
    console.log("i'm in compare answer")
    if (isWord) {
      if (data?.[index].meaning.map(m => answer.replaceAll(' ', '').trim().includes(m.replaceAll(' ', '')))) {
        collected()
      }
    } else {
      if (answer.trim() === data?.[index].word) {
        collected()
      }
    }
  }

  return (
    <Frame>
      <Txt typography="h3">Lesson{id}</Txt>
      <Txt color="gray500">
        {data?.length}/{index}
      </Txt>
      <div style={{ margin: '24px 0' }}>
        <Txt typography="h1">{isWord ? data?.[index].word : data?.[index].meaning.map(txt => txt).join(', ')}</Txt>
      </div>
      <Txt typography="p4">
        Collect Count <Txt color="green500">{collect}</Txt>
      </Txt>
      <Fixed>
        <InputFrame>
          <Input
            value={answer}
            placeholder={isWord ? '단어의 뜻을 입력해주세요' : '뜻에 맞는 단어를 입력해주세요'}
            onChange={event => setAnswer(event.target.value)}
            onKeyDown={event => event.key === 'Enter' && compareAnswer()}
          />
          <Icon name="checkCircle" color="white" clickable onClick={compareAnswer} />
        </InputFrame>
      </Fixed>
    </Frame>
  )
}

export default EnglishDetail

const Input = styled.input`
  width: 100%;
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: white;
  &:focus {
    outline: none;
  }
`
const InputFrame = styled.div`
  width: calc(1000px - 48px);
  height: 52px;
  border-radius: 16px;
  background-color: ${colors.gray700};
  display: flex;
  align-items: center;
  padding: 0 24px;
`
const Fixed = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 64px;
  left: 0;
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 160px;
  min-height: 68vh;
`
