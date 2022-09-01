let express = require('express');
let log4js = require("log4js");
let menusService = require('../services/menu.service');

const logger = log4js.getLogger("Menus Controller");

module.exports = {
    getAllCategories : getAllCategories,
    getAllMenusByCategory : getAllMenusByCategory
};

async function getAllCategories(req, res) {
    logger.debug("Inside All Categories");
    menusService.getAllCategories((err, result) => {
        if(err) {
            logger.error("Get all Categories : "+err);
            res.status(500).send(err);
        } else {
            logger.debug("Get all Categories success");
            res.status(200).send(result);
        }
    });
}

async function getAllMenusByCategory(req, res) {
    logger.debug("Inside All  Menus By Category");
    let categoryId = req.params.categoryId;
    menusService.getAllMenusByCategory(categoryId, (err, result) => {
        if(err) {
            logger.error("Get all menus : "+err);
            res.status(500).send(err);
        } else {
            logger.debug("Get all menus success");
            res.status(200).send(result);
        }
    });
}