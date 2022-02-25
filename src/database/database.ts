import * as mongoDB from "mongodb";
import DbItem from "./entities/DbItem";

const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');

const itemsCollectionName = 'items';

export const collections: { items?: mongoDB.Collection<DbItem> } = {};

export async function connectToDatabase () {

    const mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();
    const connection = await MongoClient.connect(uri, {useNewUrlParser: true});
    const database = connection.db();

    const itemsCollection: mongoDB.Collection<DbItem> = database.collection(itemsCollectionName);

    collections.items = itemsCollection;

    console.log(`Successfully connected to database: ${database.databaseName} and collection: ${itemsCollection.collectionName}`);
}
