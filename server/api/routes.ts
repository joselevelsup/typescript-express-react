import { Request, Response, NextFunction, Router } from "express";
import BaseRoute from "./base";

export default class APIRoutes extends BaseRoute{
    constructor(){
        super();
    }

    public static create(router: Router){
        router.get("/heroes", (req: Request, res: Response) => {
            new APIRoutes().getHeroes(req, res);
        })
    }

    public getHeroes(req: Request, res: Response){
        
    }
}