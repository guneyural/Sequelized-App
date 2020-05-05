const router = require('express').Router();
const User = require('../../controllers').user.Profile;

// ADD ACCOUNT METHOD=POST
router.post('/', User.addAccount);
// GET ALL ACCOUNTS METHOD=GET
router.get('/', User.getAccounts);

module.exports = router;