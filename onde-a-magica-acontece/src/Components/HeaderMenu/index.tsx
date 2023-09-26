//import LogoYouRecipe from "../../imgs/LogoRecipe.png"
import { HeaderStyled } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";



export default function HeaderMenu() {

    function cssSearch() {
    }

    return <>
        <HeaderStyled>
            <div className="menu">
            <div className="navbar">
                <input type="text" placeholder="Search..." onClick={cssSearch}/>
                <FontAwesomeIcon className="icon" icon={faSearch}/>
            </div>
                <ul>
                    <li><Link to="/register">Login</Link></li>
                    <li>Suas receitas</li>
                    <li>Options</li>
                </ul>
            </div>
        </HeaderStyled>
    </>
};