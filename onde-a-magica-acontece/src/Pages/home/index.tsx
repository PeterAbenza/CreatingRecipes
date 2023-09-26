import { BodyHome } from "./styled"

//Components
import HeaderMenu from "../../Components/HeaderMenu"
import MainMenu from "../../Components/NavBar"


export default function Home() {

    return <BodyHome>
        <HeaderMenu/>
        <main>
        <MainMenu/>
        </main>
    </BodyHome>
    
}