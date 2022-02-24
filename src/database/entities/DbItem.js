"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbItem {
    // itemBaseProductionCost: number;
    constructor(itemType, name, description, itemProductionCost, id) {
        this.type = itemType;
        this.name = name;
        this.description = description;
        this.itemProductionCost = itemProductionCost;
        // this.itemBaseProductionCost = itemBaseProductionCost;
        this._id = id;
    }
}
exports.default = DbItem;
