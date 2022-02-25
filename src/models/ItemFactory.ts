import {Type} from "./ItemType";
import {ElectricalItem} from "./ElectricalItem";
import {MechanicalItem} from "./MechanicalItem";
import { ObjectId } from "bson";

export default class ItemFactory {
    static createItem(type: Type, name: string, description: string, itemProductionCost: number, id?: ObjectId) {
        switch (type) {
            case Type.Electrical:
                return new ElectricalItem(name, description, itemProductionCost, id);
            case Type.Mechanical:
                return new MechanicalItem(name, description, itemProductionCost, id);
            default:
                throw new Error(`Invalid type ${type}`);
        }
    }
}