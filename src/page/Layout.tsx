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
  padding: 100px;
  height: calc(100vh - 200px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: ${Colors.DarkGray2};
`