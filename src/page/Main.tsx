import React, { useEffect, useState } from 'react';
import * as _ from './styles/MainStyle';
import { Txt } from '../components/Txt';

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
      </_.Content>
    </>
  );
};

export default Main;
