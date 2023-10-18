import normalize from 'emotion-normalize'
import { Global, css } from '@emotion/react'
import { colors } from './colors'

const style = css`
  ${normalize}
  * {
    margin: 0;
    padding: 0;

    ::-webkit-scrollbar {
      width: 0; /* 스크롤바의 너비 */
      height: 6px;
    }

    ::-webkit-scrollbar-corner {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${colors.gray100}; /* 스크롤바의 색상 */
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${colors.gray800};
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
