module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    // userId: DataTypes.INTEGER,
    // productId: DataTypes.INTEGER
  }, {});
  Wishlist.associate = function (models) {
    Wishlist.belongsTo(models.User, { 
      foreignKey: 'userId'
    })
    Wishlist.belongsTo(models.Product, { 
      foreignKey: 'productId'
    })
  };
  return Wishlist;
};