'use strict';

//depend on express for endpoints(uri)
const express = require('express');
const accessories = express.Router();

//create array of accessory objects
const accessoryList = [{
        item: "earring",
        color: "gold",
        price: 250,
        id: 0
    }, {
        item: "belt",
        color: "tan",
        price: 45,
        id: 1
    }];

let idCount = accessoryList.length; //initialize idCount to index + 1

//Create
accessories.post('/accessories', (req, res) => {
    //add new accessory to accessoryList
    accessoryList.push({
        item: req.body.item,
        color: req.body.color,
        price: req.body.price,
        id: idCount++
    });
    res.send(accessoryList);
});

//Read
accessories.get('/accessories', (req, res) => {
    //respond with accessoryList
    res.send(accessoryList);
});

//Update
accessories.put('/accessories/:id', (req, res) => {
    let count = 0;
    //loop through array
    for (let accessory of accessoryList) {
        //check ids while looping
        if(req.params.id == accessory.id) {
            //remove matched id and replace with new object
            accessoryList.splice(count, 1, {
                item: req.body.item,
                color: req.body.color,
                price: req.body.price,
                id: idCount++
            });
        }
    }
    count++;
    res.send(accessoryList);
});

//Delete
accessories.delete('/accessories/:id', (req, res) => {
    let count = 0;
    for(let accessory of accessoryList) {
        if(req.params.id == accessory.id) {
            //remove matched id
            accessoryList.splice(count, 1);
        }
    }
    count++;
    res.send(accessoryList);
});

//export
module.exports = accessories;
