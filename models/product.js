module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    asin: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    image: DataTypes.TEXT,
    link: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  Product.associate = function (models) {
    Product.hasMany(models.Wishlist, {
      foreignKey: 'productId'
    })
  };
  return Product;
};