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
const GetItemDto_1 = require("./dto/GetItemDto");
const bson_1 = require("bson");
function createItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newPostItemDto = req.body;
            const newItem = yield itemService.createItem(newPostItemDto.type, newPostItemDto.name, newPostItemDto.description, newPostItemDto.itemProductionCost);
            res.status(201).send({ "itemId": newItem.id });
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    });
}
exports.createItem = createItem;
function getItem(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        try {
            const item = yield itemService.findItem(new bson_1.ObjectId(id));
            if (item) {
                res.status(200).send(convertToGetItemDto(item));
            }
            else {
                res.status(404);
            }
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });
}
exports.getItem = getItem;
function getAllItems(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getItemRepresentations = yield itemService.findAllItems().then((items) => items.map(convertToGetItemDto));
            res.status(200).send(getItemRepresentations);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });
}
exports.getAllItems = getAllItems;
function updateItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.updateItem = updateItem;
//TODO: either send info about number here or change to remember BASE
function convertToGetItemDto(item) {
    return new GetItemDto_1.GetItemDto(item.itemType.type, item.itemType.typeDescription, item.name, item.description, item.calculateProductionCost(1));
}
