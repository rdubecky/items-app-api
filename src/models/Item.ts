import { ObjectId } from "bson";
import {Type, ItemType} from "./ItemType";

export default abstract class Item {//TODO: remove these base costs?
    private readonly _itemBaseCostMinimum = 10.00;
    private readonly _itemBaseCostMaximum = 1000.00;

    private _name: string;
    private _description: string;
    private _itemProductionCost: number;
    private _baseProductionCost: number;
    private _id: ObjectId;

    constructor(name: string, description: string, itemProductionCost: number) {
        this._name = name;
        this._description = description;
        this._itemProductionCost = itemProductionCost;
    }

    calculateProductionCost(totalItemCount: number): number {
        return this.calculateBaseCost(totalItemCount) + this._itemProductionCost;
    }

    private calculateBaseCost(totalItemCount: number) : number {
        return this.enforceBaseCostMinMax(this.quoteBaseCost(totalItemCount));
    }

    protected abstract quoteBaseCost(totalItemCount: number): number;

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
        return this._baseProductionCost;
    }

    get id(): ObjectId {
        return this._id;
    }

    set id(value: ObjectId) {
        this._id = value;
    }
}