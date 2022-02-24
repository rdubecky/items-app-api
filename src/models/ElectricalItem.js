"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricalItem = void 0;
const Item_1 = require("./Item");
const ItemType_1 = require("./ItemType");
class ElectricalItem extends Item_1.default {
    constructor(name, description, itemProductionCost) {
        super(name, description, itemProductionCost);
    }
    get itemType() {
        return ItemType_1.ElectricalItemType;
    }
    quoteBaseCost(totalItemCount) {
        return this.itemType.baseProductionCost - (totalItemCount * 5);
    }
}
exports.ElectricalItem = ElectricalItem;
