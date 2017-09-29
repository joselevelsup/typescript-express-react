"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.bootstrap = function () {
        return new Server;
    };
    Server.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(express.static(path.join(__dirname, "../client/static")));
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        if (this.app.get("env") !== "development") {
            router.get("*", function (req, res) {
                res.sendFile(path.join(__dirname, "../client/build/index.html"));
            });
        }
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
