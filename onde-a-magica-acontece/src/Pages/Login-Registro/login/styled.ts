import styled from "styled-components"

export const MainCenter = styled.main `
display: flex;
justify-content: center;
`

export const Bodyform = styled.form `
margin-top: 10vh;
max-height: 260px;
width: 350px;
gap: 10px;
display: flex;
flex-direction: column;

.form {
    background-color: #F5F5F5;
    padding: 15px;
    border: 1px solid;
    border-radius: 20px;

    h1 {
        margin-bottom: 10px;
    }

    .passError {
        color: #B22222;
    }

    button {
        background-color: #FFFF;
        margin-top: 20px;
        margin-left: 100px;
        padding: 5px;
        border: none;
        border-radius: 20px;
        font-size: large;
        width: 100px;
        cursor: pointer;

        &:hover {
            transition: 0.6s;
            color: #C0C0C0;
        }
    }
}

.form-infos {
    margin-top: 10px;
    gap: 15px;
    display: flex;
    flex-direction: column;

    input {
        padding: 5px;
        font-size: 20px;
    }
}

.contacriada {
        color: #000000;
        text-decoration: none;
        opacity: 50%;
        cursor: pointer;
        margin-left: 15px;
    }
`