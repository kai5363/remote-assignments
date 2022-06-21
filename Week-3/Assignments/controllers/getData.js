function asyncHandler(callback) {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
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
  if (number.isNan) {
    return res.status(404).send({ success: false, msg: 'Lack of Parameter' });
  }
  const sumUp = (num) => ((1 + num) * num) / 2;
  return res.status(200).json({
    success: true,
    data: sumUp(+number),
  });
});

const getMyName = (req, res) => {
  const { userName } = req.cookies;
  res.render('my-name', { userName });
};

const setMyName = (req, res) => {
  const { userName } = req.query;
  if (userName.trim().length !== 0) res.cookie('userName', userName);
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
