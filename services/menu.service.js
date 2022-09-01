let express = require('express');
const config = require('config');
let log4js = require("log4js");
let menusDao = require('../dao/menus.dao');
let categoryDao = require('../dao/category.dao');
const logger = log4js.getLogger("Menu Service");
logger.debug("Menu Service Initiated");

module.exports = {
    getAllCategories : getAllCategories,
    getAllMenusByCategory : getAllMenusByCategory,
    addCategory : addCategory,
    updateCategory : updateCategory
};

async function getAllCategories(callback) {
    let categories = await categoryDao.find({ active : true });
    if(categories) {
        logger.debug("category fetched successfully for ");
        callback(null, { data : categories });
    } else {
        logger.error("Failed to fetch category : "+categories);
        callback({ message : "Failed to fetch Category list." }, null);
    }
}

async function getAllMenusByCategory(categoryId, callback) {
    let menus = await menusDao.find({ categoryId : categoryId, active : true });
    if(menus) {
        logger.debug("menus fetched successfully for ");
        callback(null, { data : menus });
    } else {
        logger.error("Failed to fetch menus : "+menus);
        callback({ message : "Failed to fetch menus list." }, null);
    }
}

async function addCategory(categoryData, callback) {
    let category = await categoryDao.insertOne(categoryData);
    if(category) {
        logger.debug("category created successfully for ",category);
        callback(null, { message : "Category added successfully" });
    } else {
        logger.error("Failed to create category : "+category);
        callback({ message : "Failed to create Category." }, null);
    }
}

async function updateCategory(categoryId, categoryData, callback) {
    let findQuery = { _id : categoryId, active: true };
    let updateData = { $set : categoryData };
    let category = await categoryDao.findOneAndUpdate(findQuery, updateData);
    if(category) {
        logger.debug("category updated successfully for ",category);
        callback(null, { message : "Category updated successfully" });
    } else {
        logger.error("Failed to update category : "+category);
        callback({ message : "Failed to update Category." }, null);
    }
}
