const express = require('express')
const router = express.Router()
const controllers = require("../../controllers/admin/product.controller")

router.get('/', controllers.index);
router.patch('/change-status/:status/:id', controllers.changeStatus);
router.patch('/change-multi', controllers.changeMulti);

module.exports = router;