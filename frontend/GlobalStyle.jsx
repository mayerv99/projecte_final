import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: 0, 102, 255;
        --red: 255, 0, 0;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Noto Sans", sans-serif
    }
`;

export default GlobalStyle;
