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
import { StringSimilarity } from '../../utils/StringSimilarity'
import { animate, motion } from 'framer-motion'

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
          <Txt variants={variableAnimation} color="gray500">
            {index + 1}/{data?.length}
          </Txt>
        </motion.div>
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
        <Txt
          typography="h1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {isWord ? data?.[index].word : data?.[index].meaning.map(txt => txt).join(', ')}
        </Txt>
      </div>
      <Txt typography="p4">
        Score: <Txt color="green500">{score}</Txt>
      </Txt>
      <Txt typography="p4">
        Combo: <Txt color="green500">{combo}</Txt> &nbsp; | &nbsp; Max Combo: <Txt color="green500">{maxCombo}</Txt>
      </Txt>
      <br />
      <Txt typography="p4">
        PERFECT: <Txt color="green500">{perfect}</Txt>
      </Txt>
      <Txt>{show && (isWord ? data?.[index].meaning.map(txt => txt).join(', ') : data?.[index].word)}</Txt>
      <Fixed initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <InputFrame>
          <Input
            value={answer}
            placeholder={isWord ? '단어의 한글 뜻을 입력해주세요' : '뜻에 맞는 영단어를 입력해주세요'}
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
const Fixed = styled(motion.div)`
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
