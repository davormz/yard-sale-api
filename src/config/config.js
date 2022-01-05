require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.APP_PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  apiKey: process.env.SEC_API_KEY,
  securitySalt: process.env.SEC_SALT,
  jwtSecret: process.env.SEC_JWT_SECRET

}

module.exports = { config };
