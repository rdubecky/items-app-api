"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.collections = void 0;
const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');
const itemsCollectionName = 'items';
exports.collections = {};
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const mongo = yield MongoMemoryServer.create();
        const uri = mongo.getUri();
        const connection = yield MongoClient.connect(uri, { useNewUrlParser: true });
        const database = connection.db();
        const itemsCollection = database.collection(itemsCollectionName);
        exports.collections.items = itemsCollection;
        console.log(`Successfully connected to database: ${database.databaseName} and collection: ${itemsCollection.collectionName}`);
    });
}
exports.connectToDatabase = connectToDatabase;
