import Express, { Application } from 'express';
import mySqlConection  from "../database";
import BaseRoutes from "../infra/baseRoutes";
import cors from "cors";

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

        mySqlConection.hasConection();
        const selectedPort = options.port ? options.port : this.defaultPort;
        this.instance.use(Express.json());
        this.instance.use(cors());
        this.instance.use(BaseRoutes)

        if(options.isTeste) return;

        this.instance.listen(selectedPort, ()=>{
            console.log(`Server rodando na porta ${selectedPort}`)
        })
    }

    getinstance(){
        return this.instance;
    }
}
