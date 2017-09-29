import { Request, Response, NextFunction, Router } from "express";
import * as path from "path";

export default class APIRoutes{

    public static create(router: Router){
        router.get("/heroes", (req: Request, res: Response) => {
            new APIRoutes().getHeroes(req, res);
        })
    }

    public getHeroes(req: Request, res: Response){
        res.json({
            "success": true,
            "body": "Heroes aren't here yet"
        });
    }
}