import styled from "styled-components"

export const MainBase = styled.main `
padding-top: 100px;
padding-left: 150px;
width: 80%;

.posts {
    
    margin-top: 40px;

    .perfilPessoa {
        display: flex;
        margin-bottom: 10px;

        img {
            border: 1px solid;
            border-radius: 50%;
        }

        .infoPost {
            margin-left: 15px;
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            
        }
    }

    .post {
        border: 1px solid;
        width: 500px;
        height: 300px;
    }

    .descricao {
        text-align: left;
        width: 450px;
        margin-bottom: 15px;
    }
}
`

