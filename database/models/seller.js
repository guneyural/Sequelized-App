'use strict';
module.exports = (sequelize, DataTypes) => {
  const seller = sequelize.define('seller', {
    shopName: DataTypes.STRING
  }, {});
  seller.associate = function(models) {
    seller.hasMany(models.product, {
      foreignKey: 'sellerId',
      as: 'Products',
      onDelete: 'CASCADE'
    });
  };
  return seller;
};