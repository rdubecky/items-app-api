import Item from "./Item";
import {ElectricalItemType, ItemType} from "./ItemType";
import { ObjectId } from "bson";

export class ElectricalItem extends Item {

    constructor(name: string, description: string, itemProductionCost: number, id?: ObjectId) {
        super(name, description, itemProductionCost, id);
    }

    get itemType(): ItemType {
        return ElectricalItemType;
    }

    protected quoteBaseCost(totalItemCount: number): number {
        return this.itemType.baseProductionCost - (totalItemCount * 5);
    }
}