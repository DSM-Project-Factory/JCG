import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
    body {
      font-family: Pretendard, sans-serif;
      color: white;
      overflow: hidden;
      line-height: 160%;
    }
`

export default GlobalStyle