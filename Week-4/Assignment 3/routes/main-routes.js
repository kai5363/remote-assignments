const express = require('express');

const router = express.Router();
const { getHomePage } = require('../controllers/users');

router.get('/', getHomePage);

module.exports = router;
