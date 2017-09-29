import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import APIRoute from "./api/routes";

export class Server{

    public app: express.Application;
    public router: express.Router;

    public static bootstrap(): Server{
        return new Server;
    }

    public config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(express.static(path.join(__dirname, "../client/static")));
    }

    private routes(){
        let router: express.Router = express.Router();

        if(this.app.get("env") !== "development"){
            router.get("*", (req: express.Request, res: express.Response) => {
                res.sendFile(path.join(__dirname, "../public/index.html"));
            });
        }

        APIRoute.create(router);

        this.app.use(router);
    }


    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
}