import React from "react";
import styled from "styled-components";
import {Colors} from "../style/Color";
import {Text} from "./Text";

const Footer = () => {
    return (
        <>
            <Cover>
                <Line></Line>
                <Text font={"TitleLarge"}>JCG</Text>
                <Text>Amazing CBT Service</Text>
            </Cover>
        </>
    )
}

export default Footer

const Line = styled.div`
  margin: 0 0 24px;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${Colors["G700"]};
`
const Cover = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 64px 0;
`