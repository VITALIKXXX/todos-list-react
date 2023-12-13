import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  background: #eee;
  font-family: 'Montserrat', sans-serif;
}
`;
export const theme = {
  background: {
      backgroundColors: "white"
  },
  colors: {
      primeriColors: "teal",
      white: "#ffffff",
  },
};