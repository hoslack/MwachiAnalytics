const router = require('express').Router();
const createOrder = require('../controllers/createOrder');


router.post('/orders', createOrder);


module.exports = router;
