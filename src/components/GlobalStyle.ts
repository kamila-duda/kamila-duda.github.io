import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
} 
body{
  background-color: #ffffff;
  background-size: 15%;
  font-family: "Poppins", sans-serif;
  margin: 0;
}
`;
