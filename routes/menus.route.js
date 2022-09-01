let express = require('express');
let router = express.Router();
let log4js = require("log4js");
const logger = log4js.getLogger("Menu Routes");
let menusController = require('../controllers/menus.controller');

logger.debug("Menu Routes Initiated");

router.get('/category', menusController.getAllCategories);

router.post('/category', menusController.addCategory);

router.put('/category/:categoryId', menusController.updateCategory);

router.delete('/category/:categoryId', menusController.removeCategory);


router.get('/:categoryId', menusController.getAllMenusByCategory);

router.post('/', menusController.addMenu);

router.put('/:menuId', menusController.updateMenu);

router.delete('/:menuId', menusController.removeMenu);

module.exports = router;
