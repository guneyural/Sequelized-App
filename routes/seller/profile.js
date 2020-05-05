const router = require('express').Router();
const Seller = require('../../controllers').seller.Profile;

// ADD ACCOUNT METHOD=POST
router.post('/', Seller.addAccount);
// GET ALL ACCOUNTS METHOD=GET
router.get('/', Seller.getAccounts);

module.exports = router;