import { useEffect, useState } from 'react'
import Chapter, { types } from './Chapter'
import { PastQuestion } from '../assets/PastQuestion'

const All = () => {
  const [randomArr, setRandomArr] = useState<types[]>([])

  const makeArr = () => {
    setRandomArr(PastQuestion.sort(() => 0.5 - Math.random()))
  }
  useEffect(makeArr, [])

  return <>{randomArr[0] && <Chapter dataList={randomArr[0] || []} />}</>
}

export default All
