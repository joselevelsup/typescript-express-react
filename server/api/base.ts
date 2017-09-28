import { Request, Response } from "express";

export default class BaseRoute {

    protected title: string;
    private scripts: string[];

    constructor() {
        this.title = "";
    }

    public render(req: Request, res: Response, view: string, options?: Object) {
        res.locals.BASE_URL = "/";
        res.locals.title = this.title;
        res.render(view, options);
    }
}