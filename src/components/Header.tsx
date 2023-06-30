import React from "react";
import styled from "styled-components";
import {Text} from "./Text";
import {NavLink} from "react-router-dom";
import ProfileImg from "../assets/image/mooner.png";
import {Colors} from "../style/Color";

const Header = () => {
    return (
        <Cover>
            <FDiv><Text font={"TitleSmall"}>JCG</Text></FDiv>
            <CDiv>
                <NavLink to="/subject"><Text>과목</Text></NavLink>
                <NavLink to="/ranking"><Text>랭킹</Text></NavLink>
                <NavLink to="/question"><Text>질문</Text></NavLink>
                <NavLink to="/search"><Text>검색</Text></NavLink>
            </CDiv>
            <FDiv just><ImgCover><Img src={ProfileImg}/></ImgCover></FDiv>
        </Cover>
    )
}

export default Header

const ImgCover = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: solid ${Colors.P600} 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`
const CDiv = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
`
const FDiv = styled.div<{ just?: boolean }>`
  width: 64px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => props.just && "flex-end"};
`
const Cover = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`