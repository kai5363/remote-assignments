const express = require('express');
const mainRoutes = require('./routes/main-routes');
const apiRoutes = require('./routes/api-routes');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('./public'));

app.use('/', mainRoutes);
app.use('/api/v1/', apiRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ success: false, message: err.message });
  next();
});

app.listen(3000, () => {
  console.log('server is listen on prot 300....');
});
