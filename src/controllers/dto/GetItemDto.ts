export class GetItemDto {
    typeName: string;
    typeDescription: string;
    name: string;
    description:string;
    calculatedProductionCost: number;

    constructor(typeName: string, typeDescription: string, name: string, description: string, calculatedProductionCost: number) {
        this.typeName = typeName;
        this.typeDescription = typeDescription;
        this.name = name;
        this.description = description;
        this.calculatedProductionCost = calculatedProductionCost;
    }
}