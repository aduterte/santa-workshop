// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Product extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Product.init({
//     name: DataTypes.STRING,
//     rating: DataTypes.INTEGER,
//     imgUrl: DataTypes.STRING,
//     link: DataTypes.STRING,
//     description: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Product',
//   });
//   return Product;
// };

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
    Product.hasMany(models.Wishlist, {
      foreignKey: 'productId'
    })
  };
  return Product;
};