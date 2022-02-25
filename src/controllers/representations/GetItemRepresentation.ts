export class GetItemRepresentation {
    itemId: string;
    typeName: string;
    typeDescription: string;
    name: string;
    description:string;
    calculatedProductionCost: number;

    constructor(itemId: string, typeName: string, typeDescription: string, name: string, description: string, calculatedProductionCost: number) {
        this.itemId = itemId;
        this.typeName = typeName;
        this.typeDescription = typeDescription;
        this.name = name;
        this.description = description;
        this.calculatedProductionCost = calculatedProductionCost;
    }
}