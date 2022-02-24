import {Request, Response} from "express";
import * as itemService from "../services/items.service";
import Item from "../models/Item";
import {GetItemDto} from "./dto/GetItemDto";
import {PostItemDto} from "./dto/PostItemDto";
import { ObjectId } from "bson";

export async function createItem(req: Request, res: Response) {
    try {
        const newPostItemDto = req.body as PostItemDto;
        const newItem = await itemService.createItem(
            newPostItemDto.type, newPostItemDto.name, newPostItemDto.description, newPostItemDto.itemProductionCost);
        res.status(201).send({"itemId" : newItem.id});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export async function getItem(req: Request, res: Response) {
    const id = req?.params?.id;
    try {
        const item = await itemService.findItem(new ObjectId(id));
        if (item) {
            res.status(200).send(convertToGetItemDto(item));
        } else {
            res.status(404);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getAllItems(req: Request, res: Response) {
    try {
        const getItemRepresentations = await itemService.findAllItems().then((items) => items.map(convertToGetItemDto));
        res.status(200).send(getItemRepresentations);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function updateItem(req: Request, res: Response) {

}

//TODO: either send info about number here or change to remember BASE
function convertToGetItemDto(item: Item): GetItemDto {
    return new GetItemDto(item.itemType.type, item.itemType.typeDescription, item.name, item.description, item.calculateProductionCost(1));
}
