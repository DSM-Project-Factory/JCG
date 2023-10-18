import { useEffect, useState } from 'react'
import * as _ from './styles/MainStyle'
import { InfoBox, Suggestion, Txt } from 'components'

const ex = {
  title: '인기 과목',
  subTitle: '사람들이 가장 많이 이용한 과목들',
  moreLinkTo: '',
  contents: [
    { subject: '정보처리기능사', explanation: '정보처리에 있어서 가장 기초적인 것을 물어보는 시험', linkTo: '' },
  ],
}

const Main = () => {
  const [imgCnt, setImgCnt] = useState(1)
  const [bright, setBright] = useState(1)

  useEffect(() => {
    setBright(1)
    setTimeout(() => {
      setBright(0)
    }, 5500)
    const counter = setInterval(() => {
      if (imgCnt >= 7) {
        setImgCnt(1)
      } else {
        setImgCnt(prev => prev + 1)
      }
    }, 6000)
    return () => clearInterval(counter)
  }, [imgCnt])

  return (
    <>
      <_.TitleVideo src={`/videos/${imgCnt}.mp4`} autoPlay muted bright={bright} />
      <_.TitleShadow />
      <_.TitleDiv>
        <Txt typography="h1">This is Heading Text</Txt>
      </_.TitleDiv>
      <_.Content>
        <_.NotificationDiv>
          <Suggestion
            title="새로운 과목이 추가되었어요"
            subTitle="이제 정보처리 기능사 과목을 이용하실 수 있어요."
            type="notification"
          />
          <Suggestion
            title="오늘의 학습을 완료해 보세요"
            subTitle="우리의 목표를 위해 달려봅시다!"
            type="checkCircle"
          />
        </_.NotificationDiv>
        <InfoBox title={ex.title} subTitle={ex.subTitle} moreLinkTo={ex.moreLinkTo} contents={ex.contents} />
      </_.Content>
    </>
  )
}

export default Main
