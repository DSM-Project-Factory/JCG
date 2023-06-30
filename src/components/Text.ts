import styled from "styled-components";
import {Fonts, fontsKeyOfType} from "../style/Fonts";

interface text {
    font?: fontsKeyOfType;
    Color?: string;
    Margin?: string;
}

export const Text = styled.p<text>`
  font-size: ${props => props.font ?  Fonts[props.font].size : Fonts["Body"].size}px;
  font-weight: ${props => props.font ? Fonts[props.font].weight : Fonts["Body"].weight};
  color: ${props => props.Color ?? "white"};
  line-height: 160%;
  margin: ${props => props.Margin ?? 0};
`