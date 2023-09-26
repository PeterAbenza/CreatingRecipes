import { Link } from "react-router-dom"
import { MainStyled } from "./styled"




export default function MainMenu() {

    return <>
        <MainStyled>
            <div className="conteudo">
            <div className="seguindo">
              <h4>Seguindo</h4>
              <div className="seguindo-pessoas">
                <img width={50} height={50}></img>
                <p>Peter Abenza</p>
              </div>
              <div className="seguindo-pessoas">
                <img width={50} height={50}></img>
                <p>Peter Abenza</p>
              </div>
              <div className="seguindo-pessoas">
                <img width={50} height={50}></img>
                <p>Peter Abenza</p>
              </div>
              <Link to="" className="mostrar-tudo">Show all</Link>
            </div>
            <div className="Receitas-Populares">
                <h2>Receitas Populares</h2>
                <div className="Receita-Popular">
                    <img width={150} height={150}></img>
                    <div className="info-Receita-Popular">
                      <h3>Bolo de Banana</h3>
                      <p>Bolo de banana Perfeito para familia.</p>
                    </div>
                </div>
                <div className="Receita-Popular">
                    <img width={150} height={150}></img>
                    <div className="info-Receita-Popular">
                      <h3>Maracujá</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="Receita-Popular">
                    <img width={150} height={150}></img>
                    <div className="info-Receita-Popular">
                      <h3>Suco de criança</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            
            </div>
        </MainStyled>
    </>
};