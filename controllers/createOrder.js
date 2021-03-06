const Order = require('../models/Order');

module.exports = (req, res) => {
  const {
    name,
    phone_number,
    problem_statement,
    leading_channel,
    project_type,
    preferred_software,
    payment,
    description,
  } = req.body;

  const order = new Order({
    name,
    email: req.user.email,
    phone_number,
    problem_statement,
    leading_channel,
    project_type,
    preferred_software,
    payment,
    description,
  });

  order
    .save()
    .then((order) => {
  	res.json(order);
    })
    .catch((err) => {
  	 res.status(500).send('Unable to save order in the database');
    });
};
