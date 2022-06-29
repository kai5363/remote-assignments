const bcrypt = require('bcrypt');
const db = require('../servies/db');

function asyncHandler(callback) {
  return async (req, res, next) => {
    try {
      await callback(req, res);
    } catch (err) {
      next(err);
    }
  };
}

const getHomePage = (req, res) => {
  const { email } = req.cookies;
  res.clearCookie('email');
  res.render('user', { email });
};

const getMemberPage = (req, res) => {
  const { email } = req.cookies;
  res.render('member', { email });
};

const getLogoutPage = (req, res) => {
  res.redirect('/');
};

const checkUserEmail = async (email) => {
  const result = await db.query(
    `SELECT email FROM user WHERE email='${email}'`,
  );
  if (result.length) return true;
  return false;
};

const getUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await db.query(
    `SELECT password FROM user WHERE email='${email}';`,
  );
  const user = result[0];
  if (!user) {
    return res.status(401).json({ success: false, userInfo: 'Signin failed' });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ success: false, userInfo: 'Signin failed' });
  }
  res.cookie('email', email);
  return res
    .status(200)
    .json({ success: true, userInfo: 'Signin successfully' });
});

const createUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const isUsedEmail = await checkUserEmail(email);
  if (isUsedEmail) {
    return res
      .status(200)
      .json({ success: false, userInfo: 'Email has been used' });
  }
  await db.query(
    `INSERT INTO user (email, password) VALUE ('${email}', '${encryptedPassword}');`,
  );
  res.cookie('email', email);
  return res
    .status(201)
    .json({ success: true, userInfo: 'Account create successfully' });
});

module.exports = {
  getHomePage,
  getMemberPage,
  getLogoutPage,
  getUser,
  createUser,
};
