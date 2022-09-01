let express = require('express');
let router = express.Router();
let log4js = require("log4js");
const logger = log4js.getLogger("Menu Routes");
let menusController = require('../controllers/menus.controller');

logger.debug("Menu Routes Initiated");

router.get('/', menusController.getAllCategories);

router.get('/:categoryId', menusController.getAllMenusByCategory);

module.exports = router;
