'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    sellerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {});
  product.associate = function(models) {
    product.belongsTo(models.seller, {
      foreignKey: 'sellerId',
      as: 'seller',
      onDelete: 'CASCADE'
    });
    product.hasOne(models.order, {
      foreignKey: 'productId',
      as: 'orders',
      onDelete: 'CASCADE'
    });
  };
  return product;
};