import styled, {css} from 'styled-components'
import { shade } from 'polished'

interface Formprops{
    hasError: boolean;
}


export const Title = styled.h1`
    font-size: 48px;
    color: #fff;
    max-width: 450px;
    display:flex;
    margin-top: 80px;
`

export const Form = styled.form<Formprops>`
    margin-top: 40px;
    max-width: 700px;
    display: flex;


    input {
        flex: 1;
        padding: 0 24px;
        border: 0;  
        border-radius: 5px 0  0 5px;
        color: #000;

        &::placeholder{
            color: #a8a8b3
        }

        ${(props)=> props.hasError && css`
        border: 2px solid #fc0101;
        border-right: 0px;
        
        `}
    }

    button{
        width: 200px;
        height: 70px;
        background-color: #09e640;
        color:#fff;
        border:0;
        font-weight: bold;
        transition: 0.2s;
        border-radius: 0 5px 5px 0;

        &:hover{
            background-color: ${shade(0.2, '#04D361')}

        }

    }
`

export const Repositories = styled.div`

    a{
        display: flex;
        background-color: #000;
        margin-top: 15px;
        border-radius: 5px;
        text-decoration: none;
        align-items: center;
        background-color: #fff;
        width: 700px;
        &:hover{
            transform: translateX(15px);
            transition: 0.5s;
        }
    }
    img{
        width: 85px;
        height: 85px;
        border-radius: 50%;
    }
    strong{
        color: #000;
    }
    p{
        color:#000;
    }

    div{
        margin-left: 15px;
    }

    svg{
        margin-left: auto;
        margin-right: 20px;
        color: #C9C9D4      ;
    }

`

export const Error = styled.span`
    color: #fc0101;
    
`

