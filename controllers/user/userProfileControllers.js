const User = require('../../database/models').user;
const Models = require('../../database/models');

const addAccount = async (req, res) => {
    try {
        // req.body => firstName:STRING, lastName:STRING
        const newAccount = await User.create(req.body);
        return res.status(201).json(newAccount);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const getAccounts = async (req, res) => {
    try {
        const getAccounts = await User.findAll({
            include: [
                {
                    model: Models.order,
                    as: 'orders'
                }
            ]
        });
        if(getAccounts.length < 1) return res.json({ msg: 'No User Available' });
        return res.json(getAccounts);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

module.exports = {
    addAccount,
    getAccounts
}