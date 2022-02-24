import * as express from "express";
import {connectToDatabase} from "./database/database";
import { itemRouter } from "./routers/items.router";


const app = express();
const port = 3000;

connectToDatabase()
.then(() => {
    app.use("/items", itemRouter);

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
.catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});