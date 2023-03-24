import React from 'react'
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import {Colors} from "../style/Color";

const Layout = () => {
    return (
        <Background>
            <Outlet />
        </Background>
    )
}

export default Layout

const Background = styled.div`
  display: flex;
  padding: 0 4%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.DarkGray2};
  width: calc(100vw - 8%);
`