# items-app-api
REST API for manipulating mechanical and electrical items

# Setup
To run, navigate to the project folder
```
cd items-app-api/
```

And run
```
npm install
node src/index.js
```

Project runs on mongodb-memory-server, a testing in-memory database. It won't persist data after the server is stopped.

# Example calls:

## GET all items
```
curl "http://localhost:3000/items"
```

## GET items by Id
```
curl "http://localhost:3000/items/6218849098f897a33f6647a3"
```

## POST items - Electrical
```
curl -X "POST" "http://localhost:3000/items" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "itemProductionCost": 22,
  "type": "Electrical",
  "name": "Item YSUJ4RD6",
  "description": "Description qnbrjmqksm"
}'
```

## POST items - Mechanical
```
curl -X "POST" "http://localhost:3000/items" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "itemProductionCost": 34,
  "type": "Mechanical",
  "name": "Item BSUH4RW3",
  "description": "Description jdispnfyur"
}'
```

## PUT items by Id
```
curl -X "PUT" "http://localhost:3000/items/6218849098f897a33f6647a3" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "name": "UPDATED Item YSUJ4RD6",
  "itemProductionCost": 1,
  "description": "UPDATED Description qnbrjmqksm"
}'
```
