import InfoElement, { InfoElementProps } from './InfoElement';
import styled from '@emotion/styled';
import { Txt } from './Txt';
import { useNavigate } from 'react-router-dom';

interface InfoProps {
  title: string;
  subTitle: string;
  moreLinkTo: string;
  contents: InfoElementProps[];
}

const InfoBox = ({ title, subTitle, moreLinkTo, contents }: InfoProps) => {
  const navigate = useNavigate();
  return (
    <Frame>
      <TitleDiv>
        <TxtDiv>
          <Txt typography='h3'>{title}</Txt>
          <Txt color='gray400'>{subTitle}</Txt>
        </TxtDiv>
        <Txt color={'green500'} clickable onClick={() => navigate(moreLinkTo)}>더보기</Txt>
      </TitleDiv>
      {contents.map((v, i) => (
        <InfoElement
          subject={v.subject}
          explanation={v.explanation}
          linkTo={v.linkTo} key={i}
        />
      ))}
    </Frame>
  );
};

export default InfoBox;

const TxtDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  width: calc(100% - 24px);
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;