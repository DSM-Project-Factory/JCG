import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { colors } from '../constant/colors';

const Layout = () => {
  return (
    <Background>
      <Header />
      <ContentSection>
        <Outlet />
      </ContentSection>
      <Footer />
    </Background>
  );
};

export default Layout;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 100%;
`;
const Background = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  background-color: ${colors.gray800};
  width: 100%;
  flex-direction: column;
  align-items: center;
`;