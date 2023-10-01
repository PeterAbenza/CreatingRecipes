import styled from "styled-components";

export const MainStyled = styled.main `
background-color: #000;
position: absolute;
margin-top: 5px;

ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 15px;

    .links {
        text-decoration: none;
        color: #FFFF;

        &:hover {
            transition: 0.6s;
            opacity: 70%;
        }
    }
}
`