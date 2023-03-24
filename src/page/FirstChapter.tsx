import React, {KeyboardEventHandler, MouseEventHandler, useEffect, useState} from 'react'
import {Text} from '../components/Text'
import {FirstData} from "../assets/FirstData";
import {List} from "../components/List";
import styled from "styled-components";
import {Colors} from "../style/Color";
import {Button} from "../components/Button";

export interface listType {
    id: number;
    date: string;
    problem: string;
    state: string;
    listData?: string[];
    url?: string;
    result: string[];
}

export type types = listType[];

const FirstChapter = () => {
    const [nowNum, setNowNum] = useState(0);
    const [answer, setAnswer] = useState('');
    const [randomArr, setRandomArr] = useState<listType[]>([]);
    const [collectArr, setCollectArr] = useState<string[]>([]);
    const [answerArr, setAnswerArr] = useState<string[]>([]);
    const maxNum = 2;

    const makeArr = () => {
        setRandomArr(FirstData.sort(() => 0.5 - Math.random()));
        setCollectArr(Array(maxNum).fill(' '));
        setAnswerArr(Array(maxNum).fill(' '));
    }
    useEffect(makeArr, []);

    const submit: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key == "Enter" && answer) {
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
    }

    const backClick: MouseEventHandler<HTMLButtonElement> = () => nowNum > 0 ? setNowNum((current) => current - 1) : null;
    const nextClick: MouseEventHandler<HTMLButtonElement> = () => nowNum < maxNum - 1 ? setNowNum((current) => current + 1) : null;

    const currentItem = randomArr[nowNum];

    return (
        <Div width='100%' justify="space-around">
            <Button height="40px" width="120px" background={Colors.DarkGray1} onClick={backClick}>이전 문제</Button>
            {currentItem && (
                <Div width="40%" justify="space-between" flex="column">
                    <Div height="fit-content" width="fit-content" align="center" gap="20px">
                        <Text Size={40} Weight={900}>{nowNum + 1}/{maxNum}</Text>
                        <Text Size={24} Weight={600} Color={collectArr[nowNum] == 'Collect' ? "green" : "red"}>{collectArr[nowNum]}</Text>
                    </Div>
                    <Div flex="column" gap="16px" height="520px">
                        <Text Color={Colors.Point}>{randomArr[nowNum].date}</Text>
                        <Text>{randomArr[nowNum].problem}</Text>
                        {
                            randomArr[nowNum].state === "list" ? <List arrProps={randomArr[nowNum].listData || []}/>
                                : randomArr[nowNum].state === "img" ? <Img src={randomArr[nowNum].url}/> : null
                        }
                    </Div>
                    {
                        <Div>
                            <Text>정답 : {randomArr[nowNum].result}</Text>
                            <Text>입력한 답 : {answerArr[nowNum]}</Text>
                        </Div>
                    }
                    <Input
                        placeholder="정답을 입력해 주세요"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)}
                        onKeyDown={submit}
                        value={answer}
                        zIndex={collectArr[nowNum] !== ' ' ? -1 : 0}
                    />
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

interface input {
    zIndex?: number;
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
const Input = styled.input<input>`
  height: 40px;
  width: 100%;
  padding: 0 20px;
  border-radius: 8px;
  background-color: ${Colors.DarkGray1};
  border: none;
  outline: 1px solid ${Colors.DarkGray1};
  transition: 0.3s;
  color: white;
  z-index: ${props => props.zIndex};

  &:focus {
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px;
    outline: 1px solid white;
  }
`
