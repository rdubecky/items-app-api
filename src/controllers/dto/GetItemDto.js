"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetItemDto = void 0;
class GetItemDto {
    constructor(typeName, typeDescription, name, description, calculatedProductionCost) {
        this.typeName = typeName;
        this.typeDescription = typeDescription;
        this.name = name;
        this.description = description;
        this.calculatedProductionCost = calculatedProductionCost;
    }
}
exports.GetItemDto = GetItemDto;
