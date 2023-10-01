import styled from "styled-components"

export const SectionPost = styled.section `
display: flex;
flex-direction: column;
gap: 10px;
width: 30%;

.PensaReceita {
    padding-left: 20px;
    padding: 10px;
    font-size: large;
}

.uplodImg {
    button {
        width: 100%;
        padding: 10px;
        border: 1px dashed #0000FF;
        cursor: pointer;
    }

    .img {
        position: relative;
        bottom: 35px;
        width: 98%;
        padding: 3px;
        border: 1px solid;
        opacity: 0;
    }
}

.button {

    padding: 2px;
    font-size: large;
}
`