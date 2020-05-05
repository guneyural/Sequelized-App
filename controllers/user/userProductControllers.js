const Op = require('sequelize').Op;
const Product = require('../../database/models').product;
const Models = require('../../database/models');

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Models.seller,
                    as: "seller"
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        if(products.length < 1) return res.json({ msg: 'NO PRODUCT' });
        return res.json(products);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const filterProducts = async (req, res) => {
    const { price, date, lt, gt } = req.body;
    try {
        const getProducts = await Product.findAll({
            include: [
                {
                    model: Models.seller,
                    as: "seller"
                }
            ],
            where: {
                price: {
                    [Op.or]: [
                        { [Op.lte]: lt },
                        { [Op.gte]: gt }
                    ]
                }
            },
            order: [
                ["createdAt", date],
                ["price", price]
            ]
        });
        if(getProducts.length < 1) return res.json({ msg: 'No Product With Theese Filters.' });
        return res.json(getProducts);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const getProductById = async (req, res) => {
    try {
        const products = await Product.findAll({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Models.seller,
                    as: "seller"
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        if(products.length < 1) return res.json({ msg: 'NO PRODUCT' });
        return res.json(products);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

module.exports = {
    getProducts,
    filterProducts,
    getProductById
}