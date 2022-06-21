const express = require('express');

const router = express.Router();
const cookieParser = require('cookie-parser');
const {
  getHomePage,
  getSumUp,
  getMyName,
  setMyName,
  clearMyName,
} = require('../controllers/getData');

router.get('/', getHomePage);

router.get('/data', getSumUp);

router.get('/myName', cookieParser(), getMyName);

router.get('/trackName', cookieParser(), setMyName);

router.get('/goodBye', clearMyName);

module.exports = router;
