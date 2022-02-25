"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicalItem = void 0;
const Item_1 = require("./Item");
const ItemType_1 = require("./ItemType");
class MechanicalItem extends Item_1.default {
    get itemType() {
        return ItemType_1.MechanicalItemType;
    }
    quoteBaseCost(totalItemCount) {
        //baseProductionCost doubles after every 5 items => base * 2^((items - 1) div 5)
        let exponent = totalItemCount > 0 ? Math.floor((totalItemCount - 1) / 5) : 0;
        return this.itemType.baseProductionCost * Math.pow(2, (exponent));
    }
}
exports.MechanicalItem = MechanicalItem;
