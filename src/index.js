"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = require("./database/database");
const items_router_1 = require("./routers/items.router");
const app = express();
const port = 3000;
(0, database_1.connectToDatabase)()
    .then(() => {
    app.use("/items", items_router_1.itemRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
