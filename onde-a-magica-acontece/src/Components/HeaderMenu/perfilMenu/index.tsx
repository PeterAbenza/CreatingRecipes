import { Link } from "react-router-dom";
import { MainStyled } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface IPerfilModal {
    isOpen: boolean
    closeModal(): void
}


export default function PerfilMenu({isOpen, closeModal}: IPerfilModal) {

    const handleLogout = () => {
        localStorage.removeItem("userLogado");
    }

    if (isOpen)  

    return <>
        <MainStyled>
            <ul>
                <Link className="links" to="/Perfil">Perfil</Link>
                <Link className="links" onClick={handleLogout} to="/Login">Sair</Link>
                <FontAwesomeIcon icon={faX} style={{color: "#ffffff"}} onClick={closeModal}/>
            </ul>
        </MainStyled>
    </>
};