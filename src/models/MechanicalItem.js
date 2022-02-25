"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicalItem = void 0;
const Item_1 = require("./Item");
const ItemType_1 = require("./ItemType");
class MechanicalItem extends Item_1.default {
    get itemType() {
        return ItemType_1.MechanicalItemType;
    }
    quoteBaseCost(existingItemsCount) {
        //baseProductionCost doubles after every 5 items => base * 2^((items) div 5)
        let exponent = existingItemsCount >= 0 ? Math.floor((existingItemsCount) / 5) : 0;
        return this.itemType.baseProductionCost * Math.pow(2, (exponent));
    }
}
exports.MechanicalItem = MechanicalItem;
