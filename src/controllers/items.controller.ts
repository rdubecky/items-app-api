import {Request, Response} from "express";
import * as itemService from "../services/items.service";
import Item from "../models/Item";
import {GetItemRepresentation} from "./representations/GetItemRepresentation";
import {PostItemInput} from "./representations/PostItemInput";
import PutItemInput from "./representations/PutItemInput";

//HTTP Method Request handlers
export async function createItem(req: Request, res: Response) {
    try {
        const postItemInput = req.body as PostItemInput;
        const newItem = await itemService.createItem(
            postItemInput.type, postItemInput.name, postItemInput.description, postItemInput.itemProductionCost);
        res.status(201).send({"itemId" : newItem.id});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export async function getItem(req: Request, res: Response) {
    const id = req?.params?.id;
    try {
        const item = await itemService.findItem(id);
        if (item) {
            res.status(200).send(convertItemToGetItemRepresentation(item));
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getAllItems(req: Request, res: Response) {
    try {
        const getItemRepresentations = await itemService.findAllItems().then((items) => items.map(convertItemToGetItemRepresentation));
        res.status(200).send(getItemRepresentations);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function updateItem(req: Request, res: Response) {
    const id = req?.params?.id;
    try {
        const putItemInput = req.body as PutItemInput;
        const updatedItem = await itemService.updateItem(
            id, putItemInput.name, putItemInput.description, putItemInput.itemProductionCost);
        res.status(200).send(convertItemToGetItemRepresentation(updatedItem));
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//CONVERSIONS
//TODO: either send info about number here or change to remember BASE
function convertItemToGetItemRepresentation(item: Item): GetItemRepresentation {
    return new GetItemRepresentation(item.id.toString(), item.itemType.type, item.itemType.typeDescription, item.name,
        item.description, item.calculateProductionCost(1));
}
