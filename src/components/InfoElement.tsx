import { Txt, Icon } from 'components'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

export interface InfoElementProps {
  subject: string
  explanation?: string
  linkTo?: string
}

export const InfoElement = ({ subject, explanation, linkTo }: InfoElementProps) => {
  const navigate = useNavigate()
  return (
    <>
      {linkTo && (
        <Container onClick={() => navigate(linkTo)}>
          <ContentDiv>
            <Txt typography="p2">{subject}</Txt>
            <Txt color="--gray500">{explanation}</Txt>
          </ContentDiv>
          <Icon name="arrowRight" color="--gray600" />
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  width: calc(100% - 48px);
  align-items: center;
  background-color: var(--gray700);
  border-radius: 16px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow:
    0 0 0 0 transparent,
    0 0 0 6px var(--gray700) inset;

  span {
    cursor: pointer;
  }

  &:hover {
    box-shadow:
      -40px 0 24px -16px var(--gray600),
      26px 0 0 -24px var(--white) inset;
  }
`
const ContentDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`
