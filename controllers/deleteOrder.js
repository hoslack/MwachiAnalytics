const Order = require('../models/Order');

module.exports = (req, res) => {
  Order.deleteOne({ _id: req.params.id })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send('unable to delete order from the database');
    });
};
