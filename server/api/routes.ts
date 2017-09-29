import { Request, Response, NextFunction, Router } from "express";
import * as path from "path";
import { IHeroModel, Hero } from "../models/hero";

export default class APIRoutes{

    public static create(router: Router){
        router.get("/heroes", (req: Request, res: Response) => {
            new APIRoutes().getHeroes(req, res);
        })

        router.post("/create/hero", (req: Request, res: Response) => {
            new APIRoutes().createHero(req, res);
        })
    }

    public getHeroes(req: Request, res: Response){
        Hero.find({}).then((heroes) => {
            res.json({
                "success": true,
                "heroes": heroes
            });
        }).catch((err) => {
            console.log(err);
            res.json({
                "success": false,
                "reason": "no heroes"
            });
        })
    }

    public createHero(req: Request, res: Response){
        console.log(req.body);
        var hero: IHeroModel = new Hero({
            heroName: req.body.heroName,
            heroPower: req.body.heroPower
        });

        hero.save().then(() => {
            res.json({
                "success": true, 
                "message": "Saved hero"
            });
        }).catch((err) => {
            res.json({
                "success": false,
                "message": "Failed to save hero"
            });
        })
    }
}