const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('env2')('./.env');
const authRoutes = require('./routes/authRoutes');

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
const db_url = 'mongodb://hos:amondi99@localhost:27017/mwachi';


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY],
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(db_url);

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open');
  app.listen(port, () => {
    console.log(`App listening on http://${host}:${port}`);
  });
});

app.use('/auth', authRoutes);

