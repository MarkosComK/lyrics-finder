import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: var(--black);
        color: var(--white);
    }
    header{
        position: absolute;
        top: 100px;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;

        font-family: 'Montserrat', sans-serif;
    }

    input, button {
        all: unset;
    }
    
    :root{
        --black: #191414;
        --green: #1DB954;
        --white: #f2f2f2;
    }
`