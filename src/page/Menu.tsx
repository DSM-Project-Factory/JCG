import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Colors} from "../style/Color";
import {Text} from "../components/Text";

const Menu = () => {
    return (
        <CoverDiv>
            <Text Size={40} Weight={600}>Jung<br/>Cher<br/>Gi</Text><Text Size={14}>SilGi</Text>
            <Div><Link to="/all"><Button>모두 풀기</Button></Link></Div>
            <Div><Link to="/firstChapter"><Button>응용 SW 기초 기술 활용 풀기</Button></Link></Div>
            <Div><Link to="/secondChapter"><Button>프로그래밍 언어 활용 풀기</Button></Link></Div>
            <Div><Link to="/thirdChapter"><Button>애플리케이션 테스트 수행 풀기</Button></Link></Div>
            <Div><Link to="/fourthChapter"><Button>SQL 활용 풀기</Button></Link></Div>
        </CoverDiv>
    )
}

export default Menu

const CoverDiv = styled.div`
  width: 100%;
  height: 90%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`
const Div = styled.div`
  width: 100%;
`
const Button = styled.button`
  width: 100%;
  height: fit-content;
  padding: 20px 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background-color: ${Colors.DarkGray1};
  border: 1px solid ${Colors.DarkGray1};
  font-size: 16px;
  color: white;
  font-weight: 200;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.04);
    box-shadow: rgba(255, 255, 255, 0.1) 0 0 100px;
    border: 1px solid white;
  }
`
