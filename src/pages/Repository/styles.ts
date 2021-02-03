import styled from 'styled-components'

export const Header = styled.header`
align-items: center;
display: flex;
justify-content: space-between;
 

 a{
    display:flex;
    text-decoration: none;
    color: #aaa2a2;
 }

svg{
    color: #aaa2a2;
}

`

export const RepositoryInfo = styled.section`

margin-top: 50px;


header{

display:flex;
align-items: center;

img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

div{
    margin-left: 15px;
    font-size: 20px;
}

strong{
color: #fff;
}

p{
    color: #fff;
}

}

ul{
    list-style: none;
    display:flex;
    font-size: 30px;
    margin-top: 20px;
    margin-left: 10px;
    li{
        margin-right: 80px;
        color: #afa2a2;
        span{
        display: block;
        }
    }
}
`

export const Issues = styled.div`
a{
        display: flex;
        background-color: #000;
        margin-top: 20px;
        border-radius: 5px;
        text-decoration: none;
        align-items: center;
        background-color: #fff;
        height: 112px;
        &:hover{
            transform: translateX(15px);
            transition: 0.5s;
        }
    }
    strong{
        color: #000;
    }
    p{
        color:#696666;
    }

    div{
        margin-left: 20px;
    }

    svg{
        margin-left: auto;
        margin-right: 20px;
        color: #C9C9D4      ;
    }


`
