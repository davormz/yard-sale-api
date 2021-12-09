const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Image, ImageSchema } = require('./images.model');
const { Order, OrderSchema } = require('./order.model');
const { Role, RoleSchema } = require('./role.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize){
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Product.config(sequelize));
  Image.init(ImageSchema, Product.config(sequelize));
  Order.init(OrderSchema, Product.config(sequelize));
  Role.init(RoleSchema, Product.config(sequelize));
  User.init(UserSchema, Product.config(sequelize));
}

module.exports = setupModels;
