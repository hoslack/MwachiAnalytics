const Order = require('../models/Order');

module.exports = (req, res) => {
  Order.findOneAndUpdate({ _id: req.params.id }, { $set: { done: true } }, { new: true })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send('unable to update order in the database');
    });
};
