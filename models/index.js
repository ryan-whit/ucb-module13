// Starter code taken from:
// - https://github.com/coding-boot-camp/fantastic-umbrella
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreign_key: 'product_id'
});

Category.hasMany(Product, {
  foreign_key: 'category_id'
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'tag_product',
})

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'product_tag',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
