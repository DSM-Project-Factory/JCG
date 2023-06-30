import React, {useState} from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Text} from "../components/Text";

const Menu = () => {
    const [imgCnt, setImgCnt] = useState(1);
    const [bright, setBright] = useState(0.6);
    const imgCntHandler = () => {
        setBright(0);
        if (imgCnt >= 10) {
            setImgCnt(1);
        } else {
            setImgCnt(prev => prev + 1);
        }
        setTimeout(()=>{
            console.log('bright! ' + bright)
            setBright(0.6);
        }, 1000)
    }
    return (
        <>
            <TitleVideo src={`/videos/${imgCnt}.mp4`} autoPlay muted onEnded={imgCntHandler} bright={bright}/>
            <TitleDiv>
                <Text font={"TitleLarge"}>New CBT</Text>
                <Text font={"BodyLarge"}>더 깔끔하고 편리해진 CBT로 자격증 공부를 해보세요</Text>
            </TitleDiv>
            <Content></Content>
            <CoverDiv>
                <Div><Link to="/all"><Button>기출 문제 풀기</Button></Link></Div>
                <Div><Link to="/firstChapter"><Button>응용 SW 기초 기술 활용 풀기</Button></Link></Div>
                <Div><Link to="/secondChapter"><Button>프로그래밍 언어 활용 풀기</Button></Link></Div>
                <Div><Link to="/thirdChapter"><Button>애플리케이션 테스트 수행 풀기</Button></Link></Div>
                <Div><Link to="/fourthChapter"><Button>SQL 활용 풀기</Button></Link></Div>
            </CoverDiv>
        </>
    )
}

export default Menu

const Content = styled.div`
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  gap: 24px;
  display: flex;
  flex-direction: column;
`
const TitleDiv = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`
const TitleVideo = styled.video<{ bright: number }>`
  width: 100%;
  height: 480px;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  filter: brightness(${props => props.bright});
  background-color: black;
  transition: 0.4s;
`
const CoverDiv = styled.div`
  padding: 40px 0;
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
