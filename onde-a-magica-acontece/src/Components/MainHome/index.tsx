import { Link } from "react-router-dom";
import { MainBase } from "./styled";
import CriarPost from "./criarPost";


export default function MainHome() {


    return <MainBase>
        <CriarPost/>
        <section className="posts">
            <div className="perfilPessoa">
                <img width={90} height={90}></img>
                <div className="infoPost">
                <Link to="">UserName</Link>
                <Link to="">03/setembro/2023</Link>
                </div>
            </div>
            <p className="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam ut neque, quasi nam facilis voluptatum accusamus iure, rerum laudantium ullam vero voluptatibus facere esse aperiam assumenda explicabo. Expedita, id?</p>
            <img className="post"></img>
        </section>
        <section className="posts">
            <div className="perfilPessoa">
                <img width={90} height={90}></img>
                <div className="infoPost">
                <Link to="">UserName</Link>
                <Link to="">03/setembro/2023</Link>
                </div>
            </div>
            <p className="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam ut neque, quasi nam facilis voluptatum accusamus iure, rerum laudantium ullam vero voluptatibus facere esse aperiam assumenda explicabo. Expedita, id?</p>
            <img className="post"></img>
        </section>
        <section className="posts">
            <div className="perfilPessoa">
                <img width={90} height={90}></img>
                <div className="infoPost">
                <Link to="">UserName</Link>
                <Link to="">03/setembro/2023</Link>
                </div>
            </div>
            <p className="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam ut neque, quasi nam facilis voluptatum accusamus iure, rerum laudantium ullam vero voluptatibus facere esse aperiam assumenda explicabo. Expedita, id?</p>
            <img className="post"></img>
        </section>
        <section className="posts">
            <div className="perfilPessoa">
                <img width={90} height={90}></img>
                <div className="infoPost">
                <Link to="">UserName</Link>
                <Link to="">03/setembro/2023</Link>
                </div>
            </div>
            <p className="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam ut neque, quasi nam facilis voluptatum accusamus iure, rerum laudantium ullam vero voluptatibus facere esse aperiam assumenda explicabo. Expedita, id?</p>
            <img className="post"></img>
        </section>
        <section className="posts">
            <div className="perfilPessoa">
                <img width={90} height={90}></img>
                <div className="infoPost">
                <Link to="">UserName</Link>
                <Link to="">03/setembro/2023</Link>
                </div>
            </div>
            <p className="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam ut neque, quasi nam facilis voluptatum accusamus iure, rerum laudantium ullam vero voluptatibus facere esse aperiam assumenda explicabo. Expedita, id?</p>
            <img className="post"></img>
        </section>
        <section className="posts">
            <div className="perfilPessoa">
                <img width={90} height={90}></img>
                <div className="infoPost">
                <Link to="">UserName</Link>
                <Link to="">03/setembro/2023</Link>
                </div>
            </div>
            <p className="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam ut neque, quasi nam facilis voluptatum accusamus iure, rerum laudantium ullam vero voluptatibus facere esse aperiam assumenda explicabo. Expedita, id?</p>
            <img className="post"></img>
        </section>
    </MainBase>
}