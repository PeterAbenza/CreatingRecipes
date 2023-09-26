import styled from "styled-components";

export const HeaderStyled = styled.header `
display: flex;
padding: 1em;
justify-content: center;
max-width: 100%;
height: 40px;
border-bottom: 2px solid;

.menu {
   display: flex;
   gap: 20vh;

    .navbar {
        display: flex;
        gap: 15vh;

        .icon {
            position: absolute;
            margin-top: 9px;
            margin-left: 18px;
            font-size: 22px;
        }

        input{
            min-width: 450px;
            border-radius: 20px;
            font-size: 20px;
            padding-left: 50px;
        }
    }

    ul {
        font-size: 20px;
        display: flex;
        margin-top: 10px;
        gap: 2vh;
        list-style: none;

        li {
            cursor: pointer;

            &:checked .navbar{
            border: blue;
            }
        }
    }
}




`