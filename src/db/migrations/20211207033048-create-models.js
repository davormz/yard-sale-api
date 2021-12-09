'use strict';
const { CategorySchema, CATEGORY_TABLE_NAME } = require('../models/category.model');
const { CustomerSchema, CUSTOMER_TABLE_NAME } = require('../models/customer.model');
const { ImageSchema, IMAGES_TABLE_NAME } = require('../models/images.model');
const { OrderSchema, ORDER_TABLE_NAME } = require('../models/order.model');
const { ProductSchema, PRODUCT_TABLE_NAME} = require('../models/product.model');
const { RoleSchema, ROLE_TABLE_NAME } = require('../models/role.model');
const { UserSchema, USER_TABLE_NAME} = require('../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORY_TABLE_NAME, CategorySchema);
    await queryInterface.createTable(CUSTOMER_TABLE_NAME, CustomerSchema );
    await queryInterface.createTable(IMAGES_TABLE_NAME, ImageSchema);
    await queryInterface.createTable(ORDER_TABLE_NAME, OrderSchema);
    await queryInterface.createTable(PRODUCT_TABLE_NAME, ProductSchema);
    await queryInterface.createTable(ROLE_TABLE_NAME, RoleSchema);
    await queryInterface.createTable(USER_TABLE_NAME, UserSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORY_TABLE_NAME);
    await queryInterface.dropTable(CUSTOMER_TABLE_NAME);
    await queryInterface.dropTable(IMAGES_TABLE_NAME);
    await queryInterface.dropTable(ORDER_TABLE_NAME);
    await queryInterface.dropTable(PRODUCT_TABLE_NAME);
    await queryInterface.dropTable(ROLE_TABLE_NAME);
    await queryInterface.dropTable(USER_TABLE_NAME);
  }
};
