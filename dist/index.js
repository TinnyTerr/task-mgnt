"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("logging"));
const express_1 = __importDefault(require("express"));
let log = (0, logging_1.default)(`index`);
const port = 50505;
log.debug("Starting up.");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    log = (0, logging_1.default)(`get /`);
    log.info(`Get /`);
    log.info(req);
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    log = (0, logging_1.default)(`app.listen`);
    log.info(`Server is running at http://localhost:${port}`);
});
