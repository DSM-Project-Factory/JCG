import React from 'react';
import styled from '@emotion/styled';
import { Txt } from './Txt';
import { NavLink } from 'react-router-dom';
import ProfileImg from '../assets/image/mooner.png';
import colors from '../constant/colors';

const Header = () => {
  return (
    <Cover>
      <InDiv>
        <FDiv>
          <Txt typography='h3'>JCG</Txt>
        </FDiv>
        <CDiv>
          <NavLink to='/subject'>
            <Txt>과목</Txt>
          </NavLink>
          <NavLink to='/ranking'>
            <Txt>랭킹</Txt>
          </NavLink>
          <NavLink to='/question'>
            <Txt>질문</Txt>
          </NavLink>
          <NavLink to='/search'>
            <Txt>검색</Txt>
          </NavLink>
        </CDiv>
        <FDiv just>
          <ImgCover>
            <Img src={ProfileImg} />
          </ImgCover>
        </FDiv>
      </InDiv>
    </Cover>
  );
};

export default Header;

const ImgCover = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: solid ${colors.green600} 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`;
const CDiv = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
`;
const FDiv = styled.div<{ just?: boolean }>`
  width: 64px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.just && 'flex-end'};
`;
const InDiv = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const Cover = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;