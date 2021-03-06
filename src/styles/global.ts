import { createGlobalStyle } from 'styled-components';
import {
  BORDER_RADIUS_PRIMARY, COLORS, FONT_SIZE_PRIMARY, LETTER_SPACING_PRIMARY,
} from './constants';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 10px;
  --color-white: ${COLORS.white};
  --color-black: ${COLORS.black};
  --color-very-light-grey: ${COLORS.verylightGrey};
  --color-light-grey: ${COLORS.lightGrey};
  --color-grey: ${COLORS.grey};
  --color-blue: ${COLORS.blue};
  --color-blue-with-opacity: ${COLORS.blueWithOpacity};
  --color-red: ${COLORS.red};
  --font-size-primary: ${FONT_SIZE_PRIMARY};
  --letter-spacing-primary: ${LETTER_SPACING_PRIMARY};
  --border-radius-primary: ${BORDER_RADIUS_PRIMARY};
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

ul[class],
ol[class] {
  list-style: none;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
}

img {
  display: block;
  max-inline-size: 100%;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
li,
figcaption {
  max-width: 60ch;
}

input, select, textarea, button{
  font-family: inherit;
}

`;

export default GlobalStyle;
