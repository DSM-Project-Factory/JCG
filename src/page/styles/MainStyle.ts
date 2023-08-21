import styled from '@emotion/styled';

export const NotificationDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;
export const TitleShadow = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 480px;
`;
export const Content = styled.div`
  width: 100%;
  height: fit-content;
  padding: 64px 0 148px;
  gap: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleDiv = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;
export const TitleVideo = styled.video<{ bright: number }>`
  width: 100%;
  height: 480px;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  filter: brightness(${props => props.bright});
  background-color: black;
  transition: 0.4s;
`;
