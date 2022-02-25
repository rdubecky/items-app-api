import {Type} from "../../models/ItemType";

export class PostItemInput {
    type: Type;
    name: string;
    description:string;
    itemProductionCost: number;
}