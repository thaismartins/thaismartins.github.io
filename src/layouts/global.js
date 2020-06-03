import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    *:focus {
      outline: 0;
    }
  }

  html {
    width: 100vw;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
    background: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.dark};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input,
  textarea,
  select {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
  }

  main {
    margin-top: 70px;
  }

  b, strong, em {
    font-weight: 700;
  }

  i {
    font-style: italic;
  }
`

export default GlobalStyle
