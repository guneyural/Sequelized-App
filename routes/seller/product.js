const router = require('express').Router();
const Seller = require('../../controllers').seller.Product;

// METHOD=POST ADD PRODUCT
router.post('/', Seller.addProduct);
// METHOD=GET GET PRODUCTS
router.get('/', Seller.getProducts);
// METHOD=PUT UPDATE PRODUCT
router.put('/:id', Seller.updateProduct);
//METHOD=DELETE DELETE PRODUCT
router.delete('/:id', Seller.deleteProduct);

module.exports = router;