import Express, { Application } from 'express';
import {mongoDB}  from "../database";
import BaseRoutes from "../infra/baseRoutes";
import cors from "cors";
import Error from './middlewares/error';

type SetupOption = {
    isTeste?: boolean;
    port?: number;
}

export default class App {
    private instance: Application;
    private defaultPort: number = 3000;

    constructor(){
        this.instance = Express();
    }

    setup(options: SetupOption): void {

        mongoDB.createConnection();
        const selectedPort = options.port ? options.port : this.defaultPort;
        this.instance.use(Express.json());
        this.instance.use(cors());
        this.instance.use(BaseRoutes);

        if(options.isTeste) return;

        this.instance.listen(selectedPort, ()=>{
            console.log(`Server rodando na porta ${selectedPort}`)
        })
    }

    getinstance(){
        return this.instance;
    }
}
