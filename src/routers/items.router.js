"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRouter = void 0;
const express = require("express");
const itemController = require("../controllers/items.controller");
exports.itemRouter = express.Router();
//GET
exports.itemRouter.get("/", itemController.getAllItems);
exports.itemRouter.get("/:id", itemController.getItem);
//POST
exports.itemRouter.post("/", itemController.createItem);
//PUT
exports.itemRouter.put("/:id", itemController.updateItem);
