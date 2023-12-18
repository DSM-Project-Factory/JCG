/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, keyframes } from '@emotion/react'
import { Icon, Txt } from 'components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { englishType } from 'types'
import { lesson } from 'assets/english'
import styled from '@emotion/styled'
import { StringSimilarity } from '../../utils/StringSimilarity'
import { animate, motion } from 'framer-motion'
import { englishData } from './English'

type ValidGradesType = {
  [key: string]: string[]
}

const validGrades: ValidGradesType = {
  '1': ['5', '6', '7', '8'],
  '2': ['2', '3', '4', '5', '6'],
}

const EnglishDetail = () => {
  const [data, setData] = useState<englishType[]>()
  const [index, setIndex] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [isWord, setIsWord] = useState<boolean>(true)
  const [answer, setAnswer] = useState<string>('')
  const [perfect, setPerfect] = useState<number>(0)
  const [combo, setCombo] = useState<number>(0)
  const [maxCombo, setMaxCombo] = useState<number>(0)
  const [startTime, setStartTime] = useState<number>(new Date().getTime())
  const [corrects, setCorrects] = useState<boolean[]>([])
  const [inputs, setInputs] = useState<string[]>([])

  const { grade, id } = useParams()

  const initData = () => {
    setPerfect(0)
    setCombo(0)
    setMaxCombo(0)
    setStartTime(new Date().getTime())
    setCorrects([])
    setInputs([])
    setIndex(0)
    setScore(0)
    if (grade && id) {
      if (grade in validGrades && validGrades[grade].includes(id)) {
        setData(lesson[`lesson${grade}${id}`].sort(() => 0.5 - Math.random()))
      }
    }
  }

  useEffect(() => {
    initData()
  }, [id, isWord])

  const collected = (score: number) => {
    console.log('you collected!')
    setAnswer('')
    setScore(prev => prev + score)
    if (index + 1 === data?.length) {
      console.log('finish')
    } else {
      setIndex(prev => prev + 1)
    }
  }

  const compareAnswer = () => {
    console.log("i'm in compare answer")
    if (!data) return
    const ans = answer.trim()
    const arr = isWord ? data[index].meaning : [data[index].word]
    let score = 0
    for (const str of arr) {
      score = Math.max(score, Math.round(StringSimilarity.findSimilarity(ans, str) * 100))
    }
    console.log(score)
    if (score == 100) {
      setMaxCombo(prev => Math.max(prev, combo + 1))
      setCombo(prev => prev + 1)
    } else {
      setCombo(0)
    }
    setCorrects(prev => [...prev, score == 100])
    setInputs(prev => [...prev, ans])
    collected(score)
  }

  const [show, setShow] = useState<boolean>(false)

  window.onkeydown = e => {
    if (e.key === 'Control') {
      setShow(!show)
    }
  }

  const variableAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <Frame>
      <DropFilter />
      {grade && id && <BackImg url={englishData[+grade - 1][+id - 1].img} />}
      <div css={{ zIndex: 3 }}>
        <Statistics>
          <Item>
            <Txt typography="h3" css={{ color: 'rgba(255, 255, 255, 0.4)' }}>
              Score
            </Txt>
            <Txt typography="h3" color="--white">
              {score}
            </Txt>
          </Item>
          <Item>
            <Txt typography="h3" css={{ color: 'rgba(255, 255, 255, 0.4)' }}>
              Combo
            </Txt>
            <Txt typography="h3" color="--white">
              {combo}
            </Txt>
          </Item>
          <Item>
            <Txt typography="h3" css={{ color: 'rgba(255, 255, 255, 0.4)' }}>
              Max Combo
            </Txt>
            <Txt typography="h3" color="--white">
              {maxCombo}
            </Txt>
          </Item>
          <Item>
            <Txt typography="h3" css={{ color: 'rgba(255, 255, 255, 0.4)' }}>
              PERFECT
            </Txt>
            <Txt typography="h3" color="--white">
              {perfect}
            </Txt>
          </Item>
        </Statistics>
        <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.3 }}
            css={{ display: 'flex', flexDirection: 'column' }}
          >
            <Txt variants={variableAnimation} typography="h3">
              Lesson {id}
            </Txt>
            <Txt variants={variableAnimation} color="--gray500">
              {index + 1}/{data?.length}
            </Txt>
          </motion.div>
          <div css={{ display: 'flex', gap: '8px' }}>
            <Button css={{ background: isWord ? 'white' : 'rgba(255, 255, 255, 0.2)' }} onClick={() => setIsWord(true)}>
              <Txt color={isWord ? '--black' : '--gray400'}>단어</Txt>
            </Button>
            <Button
              css={{ background: !isWord ? 'white' : 'rgba(255, 255, 255, 0.2)' }}
              onClick={() => setIsWord(false)}
            >
              <Txt color={!isWord ? '--black' : '--gray400'}>뜻</Txt>
            </Button>
          </div>
        </div>
        <div css={{ margin: '24px 0' }}>
          <Txt
            typography="h1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            css={{ fontSize: 80, color: 'rgba(255, 255, 255, 0.32)' }}
          >
            {isWord ? data?.[index].word : data?.[index].meaning.map(txt => txt).join(', ')}
          </Txt>
        </div>
        <Txt>{show && (isWord ? data?.[index].meaning.map(txt => txt).join(', ') : data?.[index].word)}</Txt>
      </div>
      <Fixed initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <InputFrame>
          <Input
            value={answer}
            placeholder={isWord ? '단어의 한글 뜻을 입력해주세요' : '뜻에 맞는 영단어를 입력해주세요'}
            onChange={event => setAnswer(event.target.value)}
            onKeyDown={event => event.key === 'Enter' && compareAnswer()}
          />
          <Icon name="checkCircle" color="--white" clickable onClick={compareAnswer} />
        </InputFrame>
      </Fixed>
    </Frame>
  )
}

export default EnglishDetail

const Loading = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
const Item = styled.div`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.08);
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 24px;
`
const Statistics = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-bottom: 40px;
`
const DropFilter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(240px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`
const BackImg = styled.div<{ url: string | undefined }>`
  background-image: ${props => `url(${props.url})`};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  filter: contrast(200%);
  z-index: 1;
  background-size: 120% auto;
  animation: ${Loading} 4s ease-in-out infinite alternate;
`
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

  ::placeholder {
    color: rgba(255, 255, 255, 0.40);
  }
`
const InputFrame = styled.div`
  width: calc(1000px - 48px);
  height: 52px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  padding: 0 24px;
`
const Fixed = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 64px;
  left: 0;
  z-index: 3;
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 160px;
  height: 100%;
`
