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
exports.countAllItems = exports.updateItem = exports.createItem = exports.findItem = exports.findAllItems = void 0;
const bson_1 = require("bson");
const database_1 = require("../database/database");
const DbItem_1 = require("../database/entities/DbItem");
const ItemFactory_1 = require("../models/ItemFactory");
//CRUD methods
function findAllItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const dbItems = (yield database_1.collections.items.find({}).toArray());
        return dbItems.map(convertToItem);
    });
}
exports.findAllItems = findAllItems;
function findItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!bson_1.ObjectId.isValid(id)) {
            return null;
        }
        const query = { _id: new bson_1.ObjectId(id) };
        const dbItem = (yield database_1.collections.items.findOne(query));
        if (dbItem) {
            return convertToItem(dbItem);
        }
        else {
            return null;
        }
    });
}
exports.findItem = findItem;
function createItem(type, name, description, itemProductionCost) {
    return __awaiter(this, void 0, void 0, function* () {
        const newItem = ItemFactory_1.default.createItem(type, name, description, itemProductionCost);
        newItem.setupBaseCost(yield countAllItems());
        const newDbItem = convertToDbItem(newItem);
        const result = yield database_1.collections.items.insertOne(newDbItem);
        if (result) {
            newItem.id = result.insertedId;
            return newItem;
        }
        else {
            throw new Error("Failed to create new item");
        }
    });
}
exports.createItem = createItem;
function updateItem(id, name, description, itemProductionCost) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!bson_1.ObjectId.isValid(id)) {
            throw new Error(`Not a valid id: ${id}`);
        }
        const searchId = new bson_1.ObjectId(id);
        const query = { _id: searchId };
        const result = yield database_1.collections.items.updateOne(query, { $set: { name, description, itemProductionCost } });
        if (result.modifiedCount === 1) {
            return findItem(id);
        }
        else {
            throw new Error(`Item ${id} couldn't be updated`);
        }
    });
}
exports.updateItem = updateItem;
function countAllItems() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.collections.items.countDocuments();
    });
}
exports.countAllItems = countAllItems;
//CONVERSIONS
function convertToItem(dbItem) {
    return ItemFactory_1.default.createItem(dbItem.type, dbItem.name, dbItem.description, dbItem.itemProductionCost, dbItem.itemBaseProductionCost, dbItem._id);
}
function convertToDbItem(item) {
    return new DbItem_1.default(item.itemType.type, item.name, item.description, item.itemProductionCost, item.baseProductionCost, item.id);
}
