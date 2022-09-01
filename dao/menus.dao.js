let express = require('express');
let log4js = require("log4js");
let MenuModel = require('../models/menu.model');
const logger = log4js.getLogger("Menus Dao");

module.exports = {
    insertOne : insertOne,
    findOne : findOne,
    find : find,
    findOneAndUpdate : findOneAndUpdate,
    aggregate : aggregate,
    findWithPopulate : findWithPopulate,
    remove : remove
};

async function insertOne(menuDetails) {
    let menuData = new MenuModel(menuDetails);
    let newmenu = await menuData.save().catch((err) => {
        return err;
    });
    return newmenu;
}

async function findOne(query) {
    let menuDetails = await MenuModel.findOne(query).catch((err) => {
        return err;
    });
    return menuDetails;
}

async function findOneAndUpdate(query, updateData) {
    let options = { new : true, useFindAndModify: false };
    let menuDetails = await MenuModel.findOneAndUpdate(query, updateData, options).catch((err) => {
        return err;
    });
    return menuDetails;
}

async function find(query) {
    let menuList = await MenuModel.find(query).catch((err) => {
        return err;
    });
    return menuList;
}

async function findWithPopulate(query, fields) {
    let menuList = await MenuModel.find(query, fields).lean().catch((err) => {
        return err;
    });
    return menuList;
}

async function aggregate(pipeline) {
    let menuList = await MenuModel.aggregate(pipeline).catch((err) => {
        return err;
    });
    return menuList;
}

async function remove(query) {
    let menuDetails = await MenuModel.remove(query).catch((err) => {
        return err;
    });
    return menuDetails;
}
