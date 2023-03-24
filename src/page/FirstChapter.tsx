import React, {KeyboardEventHandler, MouseEventHandler, useEffect, useState} from 'react'
import {Text} from '../components/Text'
import {FirstData} from "../assets/FirstData";
import {List} from "../components/List";
import styled from "styled-components";
import {Colors} from "../style/Color";
import {Button} from "../components/Button";

export interface listType {
    id?: number;
    date?: string;
    problem?: string;
    state?: string;
    listData?: string[];
    url?: string;
    result?: string[];
}

export type types = listType[];

const FirstChapter = () => {
    const [nowNum, setNowNum] = useState(1);
    const [answer, setAnswer] = useState('');
    const [randomArr, setRandomArr] = useState<listType[]>([]);
    const maxNum = 2;

    const makeArr = () => {
        setRandomArr(FirstData.sort(() => 0.5 - Math.random()));
    }
    useEffect(makeArr, []);

    const submit: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key == "enter") {
            console.log('enter!!');
        }
    }

    const backClick: MouseEventHandler<HTMLButtonElement> = () => nowNum > 1 ? setNowNum((current) => current - 1) : null;
    const nextClick: MouseEventHandler<HTMLButtonElement> = () => nowNum < maxNum ? setNowNum((current) => current + 1) : null;

    const currentItem = randomArr[nowNum];

    return (
        <Div width='100%' justify="space-around">
            <Button height="40px" width="120px" background={Colors.DarkGray1} onClick={backClick}>이전 문제</Button>
            {currentItem && (
                <Div width="40%" justify="space-between" flex="column">
                    <Text Size={40} Weight={900}>{nowNum}/{maxNum}</Text>
                    <Div flex="column" gap="16px" height="520px">
                        <Text Color={Colors.Point}>{randomArr[nowNum].date}</Text>
                        <Text>{randomArr[nowNum].problem}</Text>
                        {
                            randomArr[nowNum].state === "list" ? <List arrProps={randomArr[nowNum].listData || []}/>
                                : randomArr[nowNum].state === "img" ? <Img src={randomArr[nowNum].url}/> : null
                        }
                    </Div>
                    <Input placeholder="정답을 입력해 주세요" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)} onKeyDown={submit} value={answer}/>
                </Div>
            )}
            <Button height="40px" width="120px" background={Colors.DarkGray1} onClick={nextClick}>다음 문제</Button>
        </Div>
    )
}

export default FirstChapter

interface div {
    justify?: string;
    align?: string;
    width?: string;
    height?: string;
    flex?: string;
    gap?: string;
}

const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: scale-down;
`
const Div = styled.div<div>`
  width: ${props => props["width"] ?? "100%"};
  height: ${props => props["height"] ?? "100%"};
  gap: ${props => props["gap"] ?? 0};
  display: flex;
  flex-direction: ${props => props["flex"] ?? "row"};
  justify-content: ${props => props["justify"] ?? "flex-start"};
  align-items: ${props => props["align"] ?? "flex-start"};
`
const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 20px;
  border-radius: 8px;
  background-color: ${Colors.DarkGray1};
  border: none;
  outline: 1px solid ${Colors.DarkGray1};
  transition: 0.3s;
  color: white;

  &:focus {
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px;
    outline: 1px solid white;
  }
`