import { ObjectId } from "bson";
import { collections } from "../database/database";
import DbItem from "../database/entities/DbItem";
import Item from "../models/Item";
import ItemFactory from "../models/ItemFactory";
import {Type} from "../models/ItemType";

const itemBaseCostMinimum = 10.00;
const itemBaseCostMaximum = 1000.00;

//CRUD methods
export async function findAllItems() : Promise<Item[]> {
    const dbItems = (await collections.items.find({}).toArray()) as DbItem[];
    return dbItems.map(convertToItem);
}

export async function findItem(id: string) : Promise<Item> {
    if (!ObjectId.isValid(id)) {
        return null;
    }
    const query = { _id: new ObjectId(id) };
    const dbItem = (await collections.items.findOne(query)) as DbItem;

    if (dbItem) {
        return convertToItem(dbItem); //TODO: the calculated cost will be returned in controller when necessary
    } else {
        return null;
    }
}

export async function createItem(type: Type, name: string, description: string, itemProductionCost: number): Promise<Item> {
     const newItem = ItemFactory.createItem(type, name, description, itemProductionCost);
     //TODO: maybe here calculate base cost and save it?
     const newDbItem = convertToDbItem(newItem);
     const result = await collections.items.insertOne(newDbItem);

     if(result) {
         newItem.id = result.insertedId;
         return newItem;
     } else {
         throw new Error("Failed to create new item");
     }
}

export async function updateItem(id: string, name: string, description: string, itemProductionCost: number): Promise<Item> {
    if (!ObjectId.isValid(id)) {
        throw new Error(`Not a valid id: ${id}`);
    }
    const searchId = new ObjectId(id);
    const query = { _id: searchId };
    const result = await collections.items.updateOne(query, { $set: {name, description, itemProductionCost} });

    if (result.modifiedCount === 1) {
        return findItem(id);
    } else {
        throw new Error(`Item ${id} couldn't be updated`);
    }
}

export async function countAllItems() : Promise<number> {
    return await collections.items.countDocuments();
}

//CONVERSIONS
function convertToItem(dbItem: DbItem): Item {
    return ItemFactory.createItem(dbItem.type, dbItem.name, dbItem.description, dbItem.itemProductionCost, dbItem._id);
}

function convertToDbItem(item: Item): DbItem {
    return new DbItem(item.itemType.type, item.name, item.description, item.itemProductionCost, item.id);
}