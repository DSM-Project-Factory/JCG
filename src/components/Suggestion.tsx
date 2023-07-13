import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import colors from '../constant/colors';

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: 'alarm' | 'todo';
  title: string;
  subTitle: string;
}

const Suggestion = ({ type, title, subTitle, ...props }: Props) => {
  return (
    <Box {...props}></Box>
  );
};

export default Suggestion;

const Box = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 12px;
  padding: 32px 24px;
  flex-direction: column;
  background-color: ${colors.gray700};
  border-radius: 16px;
`;