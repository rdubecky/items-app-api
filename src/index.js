"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const database_1 = require("./database/database");
const items_router_1 = require("./routers/items.router");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
(0, database_1.connectToDatabase)()
    .then(() => {
    //setup middleware
    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan('combined'));
    //setup routes
    app.use("/items", items_router_1.itemRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
