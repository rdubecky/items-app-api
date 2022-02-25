import { ObjectId } from "bson";
import {Type} from "../../models/ItemType";

export default class DbItem {
    _id: ObjectId;
    type: Type;
    name: string;
    description: string;
    itemProductionCost: number;
    itemBaseProductionCost: number;

    constructor(itemType: Type, name: string, description: string, itemProductionCost: number, itemBaseProductionCost: number, id?: ObjectId) {
        this.type = itemType;
        this.name = name;
        this.description = description;
        this.itemProductionCost = itemProductionCost;
        this.itemBaseProductionCost = itemBaseProductionCost;
        this._id = id;
    }
}