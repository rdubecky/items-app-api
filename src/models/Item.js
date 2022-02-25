"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(name, description, itemProductionCost, id) {
        this._itemBaseCostMinimum = 10.00;
        this._itemBaseCostMaximum = 1000.00;
        this._name = name;
        this._description = description;
        this._itemProductionCost = itemProductionCost;
        this._id = id;
    }
    calculateProductionCost(totalItemCount) {
        return this.calculateBaseCost(totalItemCount) + this._itemProductionCost;
    }
    calculateBaseCost(totalItemCount) {
        return this.enforceBaseCostMinMax(this.quoteBaseCost(totalItemCount));
    }
    enforceBaseCostMinMax(quotedCost) {
        return Math.min(Math.max(this._itemBaseCostMinimum, quotedCost), this._itemBaseCostMaximum);
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get itemProductionCost() {
        return this._itemProductionCost;
    }
    get baseProductionCost() {
        return this._baseProductionCost;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
exports.default = Item;
