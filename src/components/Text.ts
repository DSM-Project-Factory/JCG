import styled from "styled-components";

interface text {
    Weight?: number;
    Size?: number;
    Color?: string;
    Margin?: string;
}

export const Text = styled.p<text>`
  font-size: ${props => props.Size ?? 16}px;
  font-weight: ${props => props.Weight ?? 400};
  color: ${props => props.Color ?? "white"};
  line-height: 160%;
  margin: ${props => props.Margin ?? 0};
`