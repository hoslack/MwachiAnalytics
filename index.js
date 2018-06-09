const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('env2')('./.env');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');


const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
const db_url = process.env.MONGO_URL || 'mongodb://hos:amondi99@localhost:27017/mwachi';


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


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use('/auth', authRoutes);
  app.use('/api', orderRoutes);
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
  });
} else {
  app.use('/auth', authRoutes);
  app.use('/api', orderRoutes);
}
