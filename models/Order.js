const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = Schema({

  name: String,
  email: String,
  phone_number: String,
  problem_statement: String,
  leading_channel: String,
  project_type: String,
  preferred_software: String,
  description: String,
  payment: String,
  done:
        {
          type: Boolean,
          default: false,
        },
});

module.exports = mongoose.model('order', orderSchema);
