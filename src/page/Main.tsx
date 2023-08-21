import React, { useEffect, useState } from 'react';
import * as _ from './styles/MainStyle';
import { Txt } from '../components/Txt';
import Suggestion from '../components/Suggestion';

const Main = () => {
  const [imgCnt, setImgCnt] = useState(1);
  const [bright, setBright] = useState(1);

  useEffect(() => {
    setBright(1);
    setTimeout(() => {
      setBright(0);
    }, 5500);
    const counter = setInterval(() => {
      if (imgCnt >= 7) {
        setImgCnt(1);
      } else {
        setImgCnt(prev => prev + 1);
      }
    }, 6000);
    return () => clearInterval(counter);
  }, [imgCnt]);

  return (
    <>
      <_.TitleVideo src={`/videos/${imgCnt}.mp4`} autoPlay muted bright={bright} />
      <_.TitleShadow />
      <_.TitleDiv>
        <Txt typography='h1'>This is Heading Text</Txt>
      </_.TitleDiv>
      <_.Content>
        <_.NotificationDiv>
          <Suggestion title='새로운 과목이 추가되었어요' subTitle='이제 정보처리 기능사 과목을 이용하실 수 있어요.' type='notification' />
          <Suggestion title='오늘의 학습을 완료해 보세요' subTitle='우리의 목표를 위해 달려봅시다!' type='checkCircle' />
        </_.NotificationDiv>
      </_.Content>
    </>
  );
};

export default Main;
