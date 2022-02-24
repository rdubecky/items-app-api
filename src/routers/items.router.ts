import * as express from "express";

const itemController = require("../controllers/items.controller");

export const itemRouter = express.Router();
itemRouter.use(express.json());

//GET
itemRouter.get("/", itemController.getAllItems);
itemRouter.get("/:id", itemController.getItem);

//POST
itemRouter.post("/", itemController.createItem);

//PUT
itemRouter.put("/:id", itemController.updateItem);