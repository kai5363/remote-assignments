const express = require('express');

const { body, validationResult } = require('express-validator');

const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const {
  getUser,
  createUser,
} = require('../controllers/users');

const validEmailAndPassword = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ success: false, errors: errorMessages });
  }
  return next();
};

router.post(
  '/getUser',
  body('email')
    .isEmail()
    .withMessage('Invalid email'),
  body('password')
    .isLength({ min: 1, max: 20 })
    .withMessage('Invalid password'),
  validEmailAndPassword,
  getUser,
);

router.post(
  '/createUser',
  body('email')
    .isEmail()
    .withMessage('Invalid email'),
  body('password')
    .isLength({ min: 1, max: 20 })
    .withMessage('Invalid password'),
  validEmailAndPassword,
  createUser,
);

module.exports = router;
