import * as express from "express";

const itemController = require("../controllers/items.controller");

export const itemRouter = express.Router();

//GET
itemRouter.get("/", itemController.getAllItems);
itemRouter.get("/:id", itemController.getItem);

//POST
itemRouter.post("/", itemController.createItem);

//PUT
itemRouter.put("/:id", itemController.updateItem);