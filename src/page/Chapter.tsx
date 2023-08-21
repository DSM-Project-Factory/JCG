import React, { KeyboardEventHandler, MouseEventHandler, UIEventHandler, useEffect, useState } from 'react';
import { Txt } from '../components/Txt';
import { List } from '../components/List';
import styled from '@emotion/styled';
import { Button } from '../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { FirstData } from '../assets/FirstData';
import { SecondData } from '../assets/SecondData';
import { Code } from '../components/Code';
import { ThirdData } from '../assets/ThirdData';
import { FourthData } from '../assets/FourthData';

export interface listType {
  id: number;
  date: string;
  problem: string;
  state: string;
  listData?: string[];
  url?: string;
  code?: string;
  language?: string;
  result: string[];
}

export interface propsTypes {
  dataList?: listType[];
}

export type types = listType[];

const Chapter = ({ dataList }: propsTypes) => {
  const [nowNum, setNowNum] = useState(0);
  const [answer, setAnswer] = useState('');
  const [randomArr, setRandomArr] = useState<listType[]>([]);
  const [collectArr, setCollectArr] = useState<string[]>([]);
  const [answerArr, setAnswerArr] = useState<string[]>([]);
  const [maxNum, setMaxNum] = useState(10);
  const [hasScroll, setHasScroll] = useState(false);
  const location = useLocation();

  const makeArr = () => {
    let Data: types;
    switch (location.pathname) {
      case '/all':
        Data = dataList ? dataList : [];
        setMaxNum(20);
        break;
      case '/secondChapter':
        Data = SecondData;
        break;
      case '/thirdChapter':
        Data = ThirdData;
        break;
      case '/fourthChapter':
        Data = FourthData;
        break;
      default:
        Data = FirstData;
    }
    setRandomArr(Data.sort(() => 0.5 - Math.random()));
    setCollectArr(Array(maxNum).fill(' '));
    setAnswerArr(Array(maxNum).fill(' '));
  };
  useEffect(makeArr, []);

  const submit: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key == 'Enter' && answer) {
      if (randomArr[nowNum].result.includes(answer, 0)) {
        const changeArr = [...collectArr];
        changeArr[nowNum] = 'Collect';
        setCollectArr(changeArr);
      } else {
        const changeArr = [...collectArr];
        changeArr[nowNum] = 'Wrong';
        setCollectArr(changeArr);
      }
      const saveArr = [...answerArr];
      saveArr[nowNum] = answer;
      setAnswerArr(saveArr);
    }
  };

  const questionMove: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key == 'ArrowRight') next();
    else if (e.key == 'ArrowLeft') back();
  };

  const backClick: MouseEventHandler<HTMLButtonElement> = () => back();
  const nextClick: MouseEventHandler<HTMLButtonElement> = () => next();

  const back = () => {
    nowNum > 0 ? setNowNum((current) => current - 1) : null;
    setAnswer('');
  };

  const next = () => {
    nowNum < maxNum - 1 ? setNowNum((current) => current + 1) : null;
    setAnswer('');
  };

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    setHasScroll(target.scrollHeight > target.clientHeight);
    setHasScroll(!(target.scrollTop == 0 || target.scrollHeight - target.scrollTop == 500));
  };

  const currentItem = randomArr[nowNum];

  return (
    <Div width='100%' justify='space-between' padding='40px 0' onKeyDown={questionMove}>
      <Button height='40px' width='120px' onClick={backClick}>이전 문제</Button>
      {currentItem && (
        <Div width='460px' flex='column' justify='space-between' padding='0 40px' mediaWidth='calc(100% - 120px)'>
          <Div flex='column' gap='20px'>
            <Div height='fit-content' width='fit-content' align='center' gap='20px'>
              <Txt typography='h1'>{nowNum + 1}/{maxNum}</Txt>
              <Txt typography='h2' color={collectArr[nowNum] == 'Collect' ? 'green500' : 'gray100'}>{collectArr[nowNum]}</Txt>
            </Div>
            <Div flex='column' gap='16px' height='500px' width='100%' overflow='scroll' scrollWith='0' onScroll={handleScroll} scroll={hasScroll}>
              <Txt>{randomArr[nowNum].date}</Txt>
              <Txt>{randomArr[nowNum].problem}</Txt>
              {
                randomArr[nowNum].state === 'list' ? <List arrProps={randomArr[nowNum].listData || []} />
                  : randomArr[nowNum].state === 'img' ? <Img src={randomArr[nowNum].url} />
                    : randomArr[nowNum].state === 'code' ? <Code language={randomArr[nowNum].language || ''} codeData={randomArr[nowNum].code || ''} /> : null
              }
            </Div>
            {collectArr[nowNum] !== ' ' &&
              <Div height='fit-content' flex='column'>
                <Txt>정답 : {randomArr[nowNum].result.join(' | ')}</Txt>
                <Txt>입력 : {answerArr[nowNum]}</Txt>
              </Div>
            }
          </Div>
          {nowNum === maxNum - 1 &&
            <Link to='/result'>결과보기</Link>
          }
          <Input
            placeholder='정답을 입력해 주세요'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)}
            onKeyDown={submit}
            value={answer}
            zIndex={collectArr[nowNum] !== ' ' ? -1 : 0}
          />
        </Div>
      )}
      <Button height='40px' width='120px' onClick={nextClick}>다음 문제</Button>
    </Div>
  );
};

export default Chapter;

interface div {
  justify?: string;
  align?: string;
  width?: string;
  height?: string;
  flex?: string;
  gap?: string;
  padding?: string;
  mediaWidth?: string;
  overflow?: string;
  scrollWith?: string;
  scroll?: boolean;
}

interface input {
  zIndex?: number;
}

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: scale-down;
`;
export const Div = styled.div<div>`
  width: ${props => props['width'] ?? '100%'};
  height: ${props => props['height'] ?? '100%'};
  gap: ${props => props['gap'] ?? 0};
  display: flex;
  flex-direction: ${props => props['flex'] ?? 'row'};
  justify-content: ${props => props['justify'] ?? 'flex-start'};
  align-items: ${props => props['align'] ?? 'flex-start'};
  padding: ${props => props['padding'] ?? 0};
  transition: 0.3s;
  overflow-y: ${props => props.overflow ?? 'hidden'};
  box-shadow: ${props => props.scroll ? 'inset 0px -40px 40px -40px #000000, inset 0px 40px 40px -40px #000000' : 'none'};

  ::-webkit-scrollbar {
    width: ${props => props.scrollWith ?? '6px'};
  }

  @media screen and (max-width: 600px) {
    width: ${props => props.mediaWidth ?? '100%'};
  }
`;
const Input = styled.input<input>`
  height: fit-content;
  width: calc(100% - 40px);
  padding: 20px 20px;
  border-radius: 8px;
  border: none;
  transition: 0.3s;
  color: white;
  z-index: ${props => props.zIndex};
  position: relative;
  bottom: 100px;

  &:focus {
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px;
    outline: 1px solid white;
  }
`;
