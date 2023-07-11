import React from 'react';
import styled from '@emotion/styled';
import colors from '../constant/colors';
import { Txt } from './Txt';

const Footer = () => {
  return (
    <Cover>
      <InDiv>
        <Service>
          <Cell>
            <Txt css={{margin: '0 0 8px'}}>서비스</Txt>
          </Cell>
        </Service>
        <Txt typography='p2'>JCG</Txt>
      </InDiv>
    </Cover>
  );
};

export default Footer;

const Cell = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  width: 160px;
  height: fit-content;
`;
const Service = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 40px;
  padding: 0 0 50px;
`;
const InDiv = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  padding: 50px 0 100px;
  gap: 0;
`;
const Cover = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: ${colors.gray700};
`;