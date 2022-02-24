"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricalItemType = exports.MechanicalItemType = exports.ItemType = exports.Type = void 0;
var Type;
(function (Type) {
    Type["Mechanical"] = "Mechanical";
    Type["Electrical"] = "Electrical";
})(Type = exports.Type || (exports.Type = {}));
class ItemType {
    constructor(type, baseProductionCost, typeDescription) {
        this._type = type;
        this._baseProductionCost = baseProductionCost;
        this._typeDescription = typeDescription;
    }
    get type() {
        return this._type;
    }
    get baseProductionCost() {
        return this._baseProductionCost;
    }
    get typeDescription() {
        return this._typeDescription;
    }
}
exports.ItemType = ItemType;
exports.MechanicalItemType = new ItemType(Type.Mechanical, 50.00, 'A mechanical item, consisting of physical components');
exports.ElectricalItemType = new ItemType(Type.Electrical, 200.00, 'An electrical item, containing one or more electrical circuit');
