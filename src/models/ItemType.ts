export enum Type {
    Mechanical = "Mechanical",
    Electrical = "Electrical",
}

export class ItemType {
    private _type: Type;
    private _baseProductionCost: number;
    private _typeDescription: string;


    constructor(type: Type, baseProductionCost: number, typeDescription: string) {
        this._type = type;
        this._baseProductionCost = baseProductionCost;
        this._typeDescription = typeDescription;
    }

    get type(): Type {
        return this._type;
    }

    get baseProductionCost(): number {
        return this._baseProductionCost;
    }

    get typeDescription(): string {
        return this._typeDescription;
    }
}

export const MechanicalItemType = new ItemType(Type.Mechanical, 50.00, 'A mechanical item, consisting of physical components');
export const ElectricalItemType = new ItemType(Type.Electrical, 200.00, 'An electrical item, containing one or more electrical circuit');