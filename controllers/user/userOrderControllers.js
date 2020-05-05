const Order = require('../../database/models').order;
const Models = require('../../database/models');

const addOrder = async (req, res) => {
    try {
        // req.body => userId: INTEGER, productId: INTEGER
        const addOrder = await Order.create(req.body);
        res.json(addOrder);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const removeOrder = async (req, res) => {
    try {
        // req.body => userId: INTEGER, productId: INTEGER
        const remove = await Order.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ msg: "Order Deleted" });
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const getOrder = async (req, res) => {
    try {
        const orders = await Order.findAll({
            where: {
                userId: req.params.userId
            },
            include: [
                {
                    model: Models.user,
                    as: 'customer'
                },
                {
                    model: Models.product,
                    as: 'orders'
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        if(orders.length < 1) return res.json({ msg: "No Order Available" })
        return res.json(orders);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

module.exports = {
    addOrder,
    removeOrder,
    getOrder
}