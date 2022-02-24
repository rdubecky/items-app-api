import {Type} from "./ItemType";
import {ElectricalItem} from "./ElectricalItem";
import {MechanicalItem} from "./MechanicalItem";

export default class ItemFactory {
    static createItem(type: Type, name: string, description: string, itemProductionCost: number) {
        switch (type) {
            case Type.Electrical:
                return new ElectricalItem(name, description, itemProductionCost);
            case Type.Mechanical:
                return new MechanicalItem(name, description, itemProductionCost);
            default:
                throw new Error(`Invalid type ${type}`);
        }
    }
}