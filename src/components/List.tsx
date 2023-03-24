import React from 'react'
import styled from "styled-components";
import {Colors} from "../style/Color";
import {Text} from './Text'

interface ListProps {
    arrProps: string[];
}

export const List = ({arrProps}: ListProps) => {
    return (
        <ListDiv>
            {arrProps.map((data: string)=>{
                return <Text key={data}>{data}</Text>
            })}
        </ListDiv>
    )
}

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  border: 2px solid ${Colors.DarkGray1};
  border-radius: 8px;
  padding: 40px;
`