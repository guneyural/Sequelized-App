const router = require('express').Router();
const User = require('../../controllers').user.Order;

// ADD ORDER METHOD=POST
router.post('/', User.addOrder);
// REMOVE ORDER METHOD=DELETE
router.delete('/:id', User.removeOrder);
// GET ORDERS METHOD=GET
router.get('/:userId', User.getOrder);

module.exports = router;