"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.getAllItems = exports.getItem = exports.createItem = void 0;
const itemService = require("../services/items.service");
const GetItemRepresentation_1 = require("./representations/GetItemRepresentation");
const ErrorRepresentation_1 = require("./representations/ErrorRepresentation");
//HTTP Method Request handlers
function createItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const postItemInput = req.body;
            const newItem = yield itemService.createItem(postItemInput.type, postItemInput.name, postItemInput.description, postItemInput.itemProductionCost);
            res.status(201).send({ "itemId": newItem.id });
        }
        catch (error) {
            res.status(400).send(new ErrorRepresentation_1.ErrorRepresentation(error.message));
        }
    });
}
exports.createItem = createItem;
function getItem(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        try {
            const item = yield itemService.findItem(id);
            if (item) {
                res.status(200).send(convertItemToGetItemRepresentation(item));
            }
            else {
                res.status(404).send();
            }
        }
        catch (error) {
            res.status(500).send(new ErrorRepresentation_1.ErrorRepresentation(error.message));
        }
    });
}
exports.getItem = getItem;
function getAllItems(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getItemRepresentations = yield itemService.findAllItems().then((items) => items.map(convertItemToGetItemRepresentation));
            res.status(200).send(getItemRepresentations);
        }
        catch (error) {
            res.status(500).send(new ErrorRepresentation_1.ErrorRepresentation(error.message));
        }
    });
}
exports.getAllItems = getAllItems;
function updateItem(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        try {
            const putItemInput = req.body;
            const updatedItem = yield itemService.updateItem(id, putItemInput.name, putItemInput.description, putItemInput.itemProductionCost);
            res.status(200).send(convertItemToGetItemRepresentation(updatedItem));
        }
        catch (error) {
            res.status(400).send(new ErrorRepresentation_1.ErrorRepresentation(error.message));
        }
    });
}
exports.updateItem = updateItem;
//CONVERSIONS
function convertItemToGetItemRepresentation(item) {
    return new GetItemRepresentation_1.GetItemRepresentation(item.id.toString(), item.itemType.type, item.itemType.typeDescription, item.name, item.description, item.calculateProductionCost());
}
