import styled from '@emotion/styled'
import { colors } from 'constant'
import { Txt } from 'components'

export const Footer = () => {
  return (
    <Cover>
      <InDiv>
        <Service>
          <Cell>
            <Txt css={{ margin: '0 0 8px' }}>서비스</Txt>
            <Txt color="gray500">공지사항</Txt>
            <Txt color="gray500">과목</Txt>
            <Txt color="gray500">랭킹</Txt>
            <Txt color="gray500">질문</Txt>
          </Cell>
          <Cell>
            <Txt css={{ margin: '0 0 8px' }}>지원</Txt>
            <Txt color="gray500">자주 묻는 질문</Txt>
            <Txt color="gray500">문의</Txt>
          </Cell>
          <Cell>
            <Txt css={{ margin: '0 0 8px' }}>기타</Txt>
            <Txt color="gray500">개인정보 처리방침</Txt>
            <Txt color="gray500">서비스 이용약관</Txt>
          </Cell>
        </Service>
        <Txt typography="p2">JCG</Txt>
        <TxtDiv>
          <Txt typography="p4" color="gray400">
            대전광역시 유성구 가정북로 76
          </Txt>
          <Txt typography="p4" color="gray400">
            wjknn3123@gmail.com
          </Txt>
        </TxtDiv>
        <IconDiv>
          <Icon></Icon>
          <Icon></Icon>
          <Icon></Icon>
          <Icon></Icon>
          <Icon></Icon>
        </IconDiv>
      </InDiv>
    </Cover>
  )
}

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${colors.gray600};
`
const IconDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  height: fit-content;
`
const TxtDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 0 24px;
  height: fit-content;
`
const Cell = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  width: 160px;
  height: fit-content;
`
const Service = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 40px;
  padding: 0 0 50px;
`
const InDiv = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  padding: 50px 0 100px;
  gap: 0;
`
const Cover = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: ${colors.gray700};
`
