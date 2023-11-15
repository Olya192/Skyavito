import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  html,
  body {
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }
  
  div,
  button,
  a {
    font-family: 'Roboto', sans-serif;
  }

  @font-face {
  font-family: "Roboto";
  src: local("Roboto"), url('../../../public/fonts/Roboto-Regular.ttf') format("ttf");
  font-weight: 400;
  font-style: normal;
}

  `