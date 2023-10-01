import { BodyHome } from "./styled"

//Components
import HeaderMenu from "../../Components/HeaderMenu"
import MainMenu from "../../Components/NavBar"
import MainHome from "../../Components/MainHome"


export default function Home() {

    return <BodyHome>
        <HeaderMenu/>
        <main>
        <MainHome/>
        <MainMenu/>
        </main>
    </BodyHome>
    
}