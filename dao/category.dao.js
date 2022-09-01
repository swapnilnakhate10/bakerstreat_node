let express = require('express');
let log4js = require("log4js");
let CategoryModel = require('../models/category.model');
const logger = log4js.getLogger("Categorys Dao");

module.exports = {
    insertOne : insertOne,
    findOne : findOne,
    find : find,
    findOneAndUpdate : findOneAndUpdate,
    aggregate : aggregate,
    findWithPopulate : findWithPopulate,
    remove : remove
};

async function insertOne(categoryDetails) {
    let categoryData = new CategoryModel(categoryDetails);
    let newcategory = await categoryData.save().catch((err) => {
        return err;
    });
    return newcategory;
}

async function findOne(query) {
    let categoryDetails = await CategoryModel.findOne(query).catch((err) => {
        return err;
    });
    return categoryDetails;
}

async function findOneAndUpdate(query, updateData) {
    let options = { new : true, useFindAndModify: false  };
    let categoryDetails = await CategoryModel.findOneAndUpdate(query, updateData, options).catch((err) => {
        return err;
    });
    return categoryDetails;
}

async function find(query) {
    let categoryList = await CategoryModel.find(query).catch((err) => {
        return err;
    });
    return categoryList;
}

async function findWithPopulate(query, fields) {
    let categoryList = await CategoryModel.find(query, fields).lean().catch((err) => {
        return err;
    });
    return categoryList;
}

async function aggregate(pipeline) {
    let categoryList = await CategoryModel.aggregate(pipeline).catch((err) => {
        return err;
    });
    return categoryList;
}

async function remove(query) {
    let categoryDetails = await CategoryModel.remove(query).catch((err) => {
        return err;
    });
    return categoryDetails;
}
