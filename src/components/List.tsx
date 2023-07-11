import React from 'react';
import styled from '@emotion/styled';
import { Txt } from './Txt';

interface ListProps {
  arrProps: string[];
}

export const List = ({ arrProps }: ListProps) => {
  return (
    <ListDiv>
      {arrProps.map((data: string, index: number) => {
        return <Txt key={index}>{data}</Txt>;
      })}
    </ListDiv>
  );
};

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  border-radius: 8px;
  padding: 30px;
`;