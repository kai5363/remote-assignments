const express = require('express');

const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const {
  getUser,
  createUser,
} = require('../controllers/users');

router.post('/getUser', getUser);

router.post('/createUser', createUser);

module.exports = router;
