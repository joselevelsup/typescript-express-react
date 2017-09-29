"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRoute = /** @class */ (function () {
    function BaseRoute() {
        this.title = "";
    }
    BaseRoute.prototype.render = function (req, res, view, options) {
        res.locals.BASE_URL = "/";
        res.locals.title = this.title;
        res.render(view, options);
    };
    return BaseRoute;
}());
exports.default = BaseRoute;
