let express = require('express');
let log4js = require("log4js");
let menusService = require('../services/menu.service');

const logger = log4js.getLogger("Menus Controller");

module.exports = {
    getAllCategories : getAllCategories,
    getAllMenusByCategory : getAllMenusByCategory,
    addCategory : addCategory,
    updateCategory : updateCategory,
    removeCategory : removeCategory,
    addMenu : addMenu,
    updateMenu : updateMenu,
    removeMenu : removeMenu
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

async function addCategory(req, res) {
    logger.debug("Inside Add Category");
    let category = req.body;
    menusService.addCategory(category, (err, result) => {
        if(err) {
            logger.error("Add Category : ",err);
            res.status(500).send(err);
        } else {
            logger.debug("Add Category success");
            res.status(200).send(result);
        }
    });
}

async function updateCategory(req, res) {
    logger.debug("Inside Update Category");
    let category = req.body;
    let categoryId = req.params.categoryId;
    menusService.updateCategory(categoryId, category, (err, result) => {
        if(err) {
            logger.error("Update Category : ",err);
            res.status(500).send(err);
        } else {
            logger.debug("Update Category success");
            res.status(200).send(result);
        }
    });
}

async function removeCategory(req, res) {
    logger.debug("Inside remove Category");
    let categoryId = req.params.categoryId;
    menusService.removeCategory(categoryId, (err, result) => {
        if(err) {
            logger.error("remove category : ",err);
            res.status(500).send(err);
        } else {
            logger.debug("remove category success");
            res.status(200).send(result);
        }
    });
}

async function addMenu(req, res) {
    logger.debug("Inside Add Menu");
    let menu = req.body;
    menusService.addMenu(menu, (err, result) => {
        if(err) {
            logger.error("Add Menu : ",err);
            res.status(500).send(err);
        } else {
            logger.debug("Add Menu success");
            res.status(200).send(result);
        }
    });
}

async function updateMenu(req, res) {
    logger.debug("Inside Update Menu");
    let menu = req.body;
    let menuId = req.params.menuId;
    menusService.updateMenu(menuId, menu, (err, result) => {
        if(err) {
            logger.error("Update Menu : ",err);
            res.status(500).send(err);
        } else {
            logger.debug("Update Menu success");
            res.status(200).send(result);
        }
    });
}

async function removeMenu(req, res) {
    logger.debug("Inside remove Menu");
    let menuId = req.params.menuId;
    menusService.removeMenu(menuId, (err, result) => {
        if(err) {
            logger.error("Update Menu : ",err);
            res.status(500).send(err);
        } else {
            logger.debug("Update Menu success");
            res.status(200).send(result);
        }
    });
}
