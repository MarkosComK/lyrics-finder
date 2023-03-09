import styled from "styled-components";

export const Input = styled.div`
    input{
        background-color: var(--white);
        margin-right: 10px;
        height: 35px;
        width: 375px;
        border-radius: 7px;
        color: var(--black);
        font-weight: 500;
        font-size: 0.95em;

        &:focus{
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            border: 2px solid var(--green);
        }
    }
    button{
        background-color: var(--green);
        color: var(--white);
        height: 35px;
        width: 80px;
        border-radius: 7px;
        font-weight: 600;
        font-size: 0.95em;
        &:hover{
            cursor: pointer;
            background-color: var(--white);
            color: var(--green);
        }
    }
`