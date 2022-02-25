import Item from "./Item";
import {ElectricalItemType, ItemType} from "./ItemType";

export class ElectricalItem extends Item {

    get itemType(): ItemType {
        return ElectricalItemType;
    }

    protected quoteBaseCost(existingItemsCount: number): number {
        return this.itemType.baseProductionCost - (existingItemsCount * 5);
    }
}