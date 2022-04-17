import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{ 
    font-family: 'League Spartan', sans-serif;
    background-color: var(--color-light-grayish1);
    };
:root{
    --color-white: white;
    --color-black: black;
    --color-primary-desatured: hsl(180, 96%, 50%);
    --color-light-grayish1: hsl(180, 52%, 96%);
    --color-light-grayish-2: hsl(180, 31%, 95%);
    --color-dark-grayish: hsl(180, 8%, 52%);
    --color-very-dark-grayish: hsl(180, 14%, 20%); 
}    
`;

export default GlobalStyle;