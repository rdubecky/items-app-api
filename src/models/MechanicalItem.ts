import Item from "./Item";
import {ItemType, MechanicalItemType} from "./ItemType";

export class MechanicalItem extends Item {

    constructor(name: string, description: string, itemProductionCost: number) {
        super(name, description, itemProductionCost);
    }

    get itemType(): ItemType {
        return MechanicalItemType;
    }

    protected quoteBaseCost(totalItemCount: number): number {
        //baseProductionCost doubles after every 5 items => base * 2^((items - 1) div 5)
        let exponent = totalItemCount > 0 ? Math.floor((totalItemCount - 1) / 5) : 0;
        return this.itemType.baseProductionCost * 2**(exponent);
    }
}