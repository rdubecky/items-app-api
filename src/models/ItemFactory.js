"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemType_1 = require("./ItemType");
const ElectricalItem_1 = require("./ElectricalItem");
const MechanicalItem_1 = require("./MechanicalItem");
class ItemFactory {
    static createItem(type, name, description, itemProductionCost) {
        switch (type) {
            case ItemType_1.Type.Electrical:
                return new ElectricalItem_1.ElectricalItem(name, description, itemProductionCost);
            case ItemType_1.Type.Mechanical:
                return new MechanicalItem_1.MechanicalItem(name, description, itemProductionCost);
            default:
                throw new Error(`Invalid type ${type}`);
        }
    }
}
exports.default = ItemFactory;
