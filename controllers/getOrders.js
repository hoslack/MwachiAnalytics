const Order = require('../models/Order');

module.exports = (req, res) => {
  if (req.user.email === 'hos.amondi@gmail.com') {
    Order.find()
      .then((properties) => {
        res.send(properties);
      })
      .catch((err) => {
        res.status(500).send('unable to read from the database');
      });
  } else {
    Order.find({ email: req.user.email })
      .then((properties) => {
        res.send(properties);
      })
      .catch((err) => {
        res.status(500).send('unable to read from the database');
      });
  }
};
