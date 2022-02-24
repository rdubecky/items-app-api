import {Type} from "../../models/ItemType";

export class PostItemDto {
    type: Type;
    name: string;
    description:string;
    itemProductionCost: number;
}