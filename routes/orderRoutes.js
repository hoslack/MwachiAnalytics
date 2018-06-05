const router = require('express').Router();
const createOrder = require('../controllers/createOrder');
const getOrders = require('../controllers/getOrders');
const deleteOrder = require('../controllers/deleteOrder');
const updateOrder = require('../controllers/updateOrder');
const requireLogin = require('../middleWare/requireLogin');
const adminOnly = require('../middleWare/adminOnly');


router.post('/orders', requireLogin, createOrder);
router.get('/orders', requireLogin, getOrders);
router.delete('/orders/:id', requireLogin, deleteOrder);
router.put('/orders/:id', requireLogin, adminOnly, updateOrder);


module.exports = router;
