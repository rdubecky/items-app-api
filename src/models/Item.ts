import { ObjectId } from "bson";
import {ItemType} from "./ItemType";

export default abstract class Item {
    private readonly _itemBaseCostMinimum = 10.00;
    private readonly _itemBaseCostMaximum = 1000.00;

    private _name: string;
    private _description: string;
    private _itemProductionCost: number;
    private _baseProductionCost: number;
    private _id: ObjectId;

    constructor(name: string, description: string, itemProductionCost: number, baseProductionCost?: number, id?: ObjectId) {
        this._name = name;
        this._description = description;
        this._itemProductionCost = itemProductionCost;
        this._baseProductionCost = baseProductionCost;
        this._id = id;
    }

    calculateProductionCost(): number {
        return this.baseProductionCost + this._itemProductionCost;
    }

    setupBaseCost(existingItemsCount: number) {
        this._baseProductionCost = this.enforceBaseCostMinMax(this.quoteBaseCost(existingItemsCount));
    }

    protected abstract quoteBaseCost(existingItemsCount: number): number;

    private enforceBaseCostMinMax(quotedCost: number): number {
        return Math.min(Math.max(this._itemBaseCostMinimum, quotedCost), this._itemBaseCostMaximum);
    }

    abstract get itemType(): ItemType;

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get itemProductionCost(): number {
        return this._itemProductionCost;
    }

    get baseProductionCost(): number {
        if(!this._baseProductionCost) {
            return this.itemType.baseProductionCost; //defaults to itemType's base if setup wasn't done
        }
        return this._baseProductionCost;
    }

    get id(): ObjectId {
        return this._id;
    }

    set id(value: ObjectId) {
        this._id = value;
    }
}