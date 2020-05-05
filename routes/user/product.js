const router = require('express').Router();
const User = require('../../controllers').user.Product;

// GET PRODUCTS = GET
router.get('/', User.getProducts);
// FILTER PRODUCTS = GET
router.post('/', User.filterProducts);
// GET PRODUCT BY ID METHOD=GET
router.get('/:id', User.getProductById);

module.exports = router;