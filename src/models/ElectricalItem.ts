import Item from "./Item";
import {ElectricalItemType, ItemType} from "./ItemType";

export class ElectricalItem extends Item {

    constructor(name: string, description: string, itemProductionCost: number) {
        super(name, description, itemProductionCost);
    }

    get itemType(): ItemType {
        return ElectricalItemType;
    }

    protected quoteBaseCost(totalItemCount: number): number {
        return this.itemType.baseProductionCost - (totalItemCount * 5);
    }
}