import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import {connectToDatabase} from "./database/database";
import { itemRouter } from "./routers/items.router";
import * as bodyParser from "body-parser";

const app = express();
const port = 3000;

connectToDatabase()
.then(() => {
    //setup middleware
    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan('combined'));

    //setup routes
    app.use("/items", itemRouter);

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
.catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});