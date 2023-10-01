import { useContext } from "react";
import { SectionPost } from "./styled";
import { LogadoContext } from "../../../services/userLogado/userContext";

export default function CriarPost() {

    const {user} = useContext(LogadoContext)

    if (!user?.token) return
    return <SectionPost>
        <h1>Criar receita!</h1>
        <input className="PensaReceita" type="text" placeholder="Qual receita está pensando?"></input>
        <div className="uplodImg">
        <button>Imagem</button>
        <input  className="img" type="file" accept="image/*"></input>
        </div>
        <button className="button">Postar</button>
    </SectionPost>
}