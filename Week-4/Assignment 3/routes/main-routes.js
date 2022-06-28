const express = require('express');

const router = express.Router();
const {
  getHomePage,
  getMemberPage,
  getLogoutPage,
} = require('../controllers/users');

router.get('/', getHomePage);

router.get('/member', getMemberPage);

router.get('/logout', getLogoutPage);

module.exports = router;
