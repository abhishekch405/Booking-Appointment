const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getExpenses);

router.post('/', shopController.postExpenses);

module.exports = router;