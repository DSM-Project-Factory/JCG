import styled from '@emotion/styled';

interface button {
    width?: string;
    height?: string;
    background?: string;
    color?: string;
    padding?: string;
    justify?: string;
    gap?: string;
}

export const Button = styled.button<button>`
  display: flex;
  width: ${props => props.width ?? "fit-content"};
  height: ${props => props.height ?? "fit-content"};
  background: ${props => props.background ?? "black"};
  color: ${props => props.color ?? "white"};
  padding: ${props => props.padding ?? "0"};
  justify-content: ${props => props.justify ?? "center"};
  align-items: center;
  gap: ${props => props.gap ?? "0"};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  @media screen and (max-width: 500px) {
    width: 20px;
    height: 80px;
  }
`