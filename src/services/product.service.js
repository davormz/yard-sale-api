const faker = require('faker');
const boom = require('@hapi/boom');

class ProductService{

  constructor(){
    this.products = this.generateRandomProducts(5);
  }

  create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id){
    const product = this.products.find(item => item.id === id);
    if(product){
      return product;
    } else {
      throw boom.notFound('Product not found');
    }
  }

  update(id, changes){
    const index = this.products.findIndex(item => item.id ==id);
    if(index === -1){
      throw boom.notFound('Product not found!');
    }
    const product = this.products[index] ;
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(item => item.id ==id);
    if(index === -1){
      throw boom.notFound('Product not found!');
    }
    this.products.splice(index, 1);
    return { id };
  }

  generateRandomProducts(limit){
    const products = [];
    for (let index = 0; index < limit; index++){
      products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),

      })
    }
    return products;
  }

}

module.exports = ProductService;
