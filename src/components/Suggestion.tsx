import { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { Txt, Icon } from 'components'
import { IconName, colors } from 'constant'

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: IconName
  title: string
  subTitle: string
}

export const Suggestion = ({ type, title, subTitle, ...props }: Props) => {
  return (
    <Box {...props}>
      <Top>
        <Icon name={type} color="green500" />
        <Icon name="arrowRight" color="gray600" />
      </Top>
      <TxtDiv>
        <Txt typography="h3">{title}</Txt>
        <Txt typography="p3" color="gray400">
          {subTitle}
        </Txt>
      </TxtDiv>
    </Box>
  )
}

const TxtDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: fit-content;
  width: 100%;
`
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
`
const Box = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 12px;
  padding: 32px 24px;
  flex-direction: column;
  background-color: ${colors.gray700};
  border-radius: 16px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow:
    0 0 0 0 transparent,
    0 0 0 6px ${colors.gray700} inset;

  span {
    cursor: pointer;
  }

  &:hover {
    box-shadow:
      0 24px 40px -12px ${colors.gray600},
      0 -26px 0 -24px ${colors.white} inset;
    transform: translateY(-12px);
  }
`
