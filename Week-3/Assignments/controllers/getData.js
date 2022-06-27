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
  res.send('Hello, My Server!');
};

const getSumUp = asyncHandler((req, res) => {
  const { number } = req.query;
  if (!number) {
    return res.status(404).send({ success: false, msg: 'Lack of Parameter' });
  }
  if (Number.isNaN(+number)) {
    return res.status(404).send({ success: false, msg: 'Wrong Parameter' });
  }
  const sumUp = (num) => ((1 + num) * num) / 2;
  return res.status(200).json({ success: true, data: sumUp(+number) });
});

const getMyName = (req, res) => {
  const { userName, errorMessage } = req.cookies;
  res.clearCookie('errorMessage');
  res.render('my-name', { userName, errorMessage });
};

const setMyName = (req, res) => {
  let { userName } = req.query;
  userName = userName.trim();
  if (!userName) {
    res.cookie('errorMessage', 'Please fill in your name!');
  } else {
    res.cookie('userName', userName);
  }
  res.redirect('/myName');
};

const clearMyName = (req, res) => {
  res.clearCookie('userName');
  res.redirect('/myName');
};

module.exports = {
  getHomePage,
  getSumUp,
  getMyName,
  setMyName,
  clearMyName,
};
