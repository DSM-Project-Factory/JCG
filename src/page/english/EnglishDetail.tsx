/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Icon, Txt } from 'components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { englishType } from 'types'
import { lesson } from 'assets/english'
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
    setIndex(0)
    setCollect(0)
    if (id && id === '4') {
      setData(lesson[`lesson${id}`].sort(() => 0.5 - Math.random()))
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
      if (data?.[index].meaning.includes(answer.trim())) {
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
      <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <Txt typography="h3">Lesson{id}</Txt>
          <Txt color="gray500">
            {data?.length}/{index}
          </Txt>
        </div>
        <div css={{ display: 'flex', gap: '8px' }}>
          <Button css={{ background: isWord ? colors.green700 : colors.gray700 }} onClick={() => setIsWord(true)}>
            <Txt>단어</Txt>
          </Button>
          <Button css={{ background: !isWord ? colors.green700 : colors.gray700 }} onClick={() => setIsWord(false)}>
            <Txt>뜻</Txt>
          </Button>
        </div>
      </div>
      <div css={{ margin: '24px 0' }}>
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

const Button = styled.button`
  border: none;
  padding: 4px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`
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
