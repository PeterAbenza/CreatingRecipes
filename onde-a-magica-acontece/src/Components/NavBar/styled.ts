import styled from "styled-components";

export const MainStyled = styled.main `
position: absolute;
position: fixed;
margin-top: 100px;
top: 0px;
right: 0px;
width: 18%;

.conteudo {
    margin-right: 30px;
    .seguindo {
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        border-bottom: 1px solid;
        
        h4 {
            margin-left: 15px;
            margin-top: 20px;
        }
        
    .seguindo-pessoas {
        display: flex;
        gap: 15px;
        padding: 10px;
        cursor: pointer;
        
        img {
            border: 1px solid;
            border-radius: 50%;
        }

        p{
            margin-top: 12px;
        }

        &:hover {
            background-color: #D3D3D3;
        }
    }

    .mostrar-tudo {
        text-decoration: none;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
    }
};

    .Receitas-Populares {
        display: flex;
        flex-direction: column;
        gap: 15px;

    h2 {
        margin-top: 20px;
        text-align: center;
    }

    .Receita-Popular {
        display: flex;
        
        .info-Receita-Popular {

        h3 {
            width: 100%;
            margin-top: 20px;
            margin-left: 10px;
        }

        p {
            margin-top: 8px;
            width: 130px;
            font-size: 14px;
            margin-left: 10px;
        }
    }
    }
}

}

`