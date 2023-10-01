//import LogoYouRecipe from "../../imgs/LogoRecipe.png"
import { HeaderStyled } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { ReactNode, useContext, useState } from "react";
import { LogadoContext } from "../../services/userLogado/userContext";
import PerfilMenu from "./perfilMenu"

export default function HeaderMenu() {
    const {user} = useContext(LogadoContext)
    const [modal, setModal] = useState(false)

    let Logado = {} as ReactNode;

    if(user?.token) {
        Logado = <Link to="" className="logado">{user.nome}</Link>
    } else {
        Logado = <Link to="/login" className="logado">Login</Link>
    }

    return <>
        <HeaderStyled>
            <div className="menu">
            <div className="navbar">
                <input type="text" placeholder="Search..."/>
                <FontAwesomeIcon className="icon" icon={faSearch}/>
            </div>
                <ul>
                    <li onClick={() => setModal(!modal)}>{Logado}
                    <div>
                        <PerfilMenu isOpen={modal} closeModal={() => setModal(false)}/>
                    </div>
                    </li>
                    <li>Suas receitas</li>
                    <li>Options</li>
                </ul>
            </div>
        </HeaderStyled>
    </>
};