const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Image, ImageSchema } = require('./images.model');
const { Order, OrderSchema } = require('./order.model');
const { Role, RoleSchema } = require('./role.model');
const { User, UserSchema } = require('./user.model');
const { Address, AddressSchema} = require('./address.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');
const { UserRole, UserRoleSchema } = require('./users-roles.model');
const { ProdcutCategory, ProductCategorySchema } = require('../models/products-categories.model');

function setupModels(sequelize){
  initModels(sequelize);
  initAssociations(sequelize);
}

function initModels(sequelize){
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Image.init(ImageSchema, Image.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Address.init(AddressSchema, Address.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  UserRole.init(UserRoleSchema, UserRole.config(sequelize));
  ProdcutCategory.init(ProductCategorySchema, ProdcutCategory.config(sequelize));
}

function initAssociations(sequelize){
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Image.associate(sequelize.models);
  Order.associate(sequelize.models);
  Role.associate(sequelize.models);
  User.associate(sequelize.models);
  Address.associate(sequelize.models);
}

module.exports = setupModels;
