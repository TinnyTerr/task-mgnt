import logger, {Logger} from "logging";
import express, { Express, Request, Response } from "express";

let log: Logger = logger(`index`);
const port: number = 50505;

log.debug("Starting up.");

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    log = logger(`get /`);

    log.info(`Get /`);
    log.info(req);

    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    log = logger(`app.listen`);

    log.info(`Server is running at http://localhost:${port}`);
});
