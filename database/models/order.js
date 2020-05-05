'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'customer',
      onDelete: 'CASCADE'
    });
    order.belongsTo(models.product, {
      foreignKey: 'productId',
      as: 'orders',
      onDelete: 'CASCADE'
    });
  };
  return order;
};