import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from 'components'

const Layout = ({ footer }: { footer?: boolean }) => {
  return (
    <Background footer={!!footer}>
      <Header />
      <ContentSection>
        <Outlet />
      </ContentSection>
      {footer && <Footer />}
    </Background>
  )
}

export default Layout

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 100%;
`
const Background = styled.div<{ footer: boolean }>`
  display: flex;
  height: ${props => (!props.footer ? '100vh' : 'auto')};
  justify-content: center;
  background-color: var(--gray800);
  width: 100%;
  flex-direction: column;
  align-items: center;
`
