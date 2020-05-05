const Op = require('sequelize').Op;
const Product = require('../../database/models').product;
const Models = require('../../database/models');

const addProduct = async (req, res) => {
    try {
        // req.body => sellerId:INTEGER, title:STRING, description:TEXT, price:INTEGER
        const newProduct = await Product.create(req.body);
        return res.status(201).json(newProduct);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const getProducts = async (req, res) => {
    try {
        const getProducts = await Product.findAll({
            include: [
                {
                    model: Models.order,
                    as: 'orders'
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        if(getProducts.length < 1) return res.json({ msg: 'No Product Available.' });
        return res.json(getProducts);
    } catch (err) {
        console.log(err.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        });
        return res.json(updateProduct);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deleteProduct = await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.json({ msg: 'PRODUCT DELETED.' });
    } catch (err){
        return res.status(500).json(err.message);
    }
}

module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
}