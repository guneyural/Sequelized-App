'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.order, {
      foreignKey: 'userId',
      as: 'orders',
      onDelete: 'CASCADE'
    });
  };
  return user;
};