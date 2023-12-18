import normalize from 'emotion-normalize'
import { Global, css } from '@emotion/react'

const style = css`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
  }

  html {
    --gray50: #000000;
    --gray100: #ffffff;
    --gray200: #f8fbfc;
    --gray300: #eaeef4;
    --gray400: #d3d7de;
    --gray500: #808488;
    --gray600: #494d52;
    --gray700: #27292c;
    --gray800: #1c1e20;
    --gray900: #000000;
    --white: #ffffff;
    --black: #000000;
    --green50: #000000;
    --green100: #ceffc9;
    --green200: #b8ffb2;
    --green300: #93f88a;
    --green400: #69f95c;
    --green500: #3bea2c;
    --green600: #27bb1a;
    --green700: #248c1b;
    --green800: #185b12;
    --green900: #153712;

    ::-webkit-scrollbar {
      width: 4px; /* 스크롤바의 너비 */
      height: 8px;
    }

    ::-webkit-scrollbar-corner {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--gray100); /* 스크롤바의 색상 */
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background: var(--gray800);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: Pretendard, sans-serif;
    color: white;
    line-height: 160%;
  }
`

export const GlobalStyle = () => {
  return <Global styles={style} />
}
