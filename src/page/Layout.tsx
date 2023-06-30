import React from 'react'
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import {Colors} from "../style/Color";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <Background>
            <ContentSection>
                <Header/>
                <Outlet/>
                <Footer/>
            </ContentSection>
        </Background>
    )
}

export default Layout

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100%;
`
const Background = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  background-color: ${Colors.G800};
  width: 100%;
`