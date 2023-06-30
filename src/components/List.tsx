import React from 'react'
import styled from "styled-components";
import {Text} from './Text'

interface ListProps {
    arrProps: string[];
}

export const List = ({arrProps}: ListProps) => {
    return (
        <ListDiv>
            {arrProps.map((data: string, index: number)=>{
                return <Text key={index}>{data}</Text>
            })}
        </ListDiv>
    )
}

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  border-radius: 8px;
  padding: 30px;
`