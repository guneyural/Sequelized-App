const Seller = require('../../database/models').seller;
const Models = require('../../database/models');

const addAccount = async (req, res) => {
    //shopName=STRING
    try {
        const newSeller = await Seller.create(req.body);
        return res.status(201).json(newSeller);
    } catch (err) {
        return res.json(500).json(err.message);
    }
    
}

const getAccounts = async (req, res) => {
    try {
        const sellers = await Seller.findAll({
            include: [
                {
                    model: Models.product,
                    as: 'Products'
                }
            ]
        });
        if(sellers.length < 1) return res.json({ msg: 'No Seller Available.' });
        return res.json(sellers);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

module.exports = {
    addAccount,
    getAccounts
}