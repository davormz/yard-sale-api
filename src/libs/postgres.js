const { Pool } = require('pg');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgress://${USER}:${PASSWORD}@${config.dbPort}:${dbHost}/${config.dbName}`;


  const connectionPool = new Pool({ connectionString: URI  });

module.exports = connectionPool;
