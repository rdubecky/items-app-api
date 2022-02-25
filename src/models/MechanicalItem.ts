import Item from "./Item";
import {ItemType, MechanicalItemType} from "./ItemType";

export class MechanicalItem extends Item {

    get itemType(): ItemType {
        return MechanicalItemType;
    }

    protected quoteBaseCost(existingItemsCount: number): number {
        //baseProductionCost doubles after every 5 items => base * 2^((items) div 5)
        let exponent = existingItemsCount >= 0 ? Math.floor((existingItemsCount) / 5) : 0;
        return this.itemType.baseProductionCost * 2**(exponent);
    }
}