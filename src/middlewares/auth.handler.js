const boom = require('@hapi/boom');
const { config } = require('./../config/config');

function checkApiKey(req, res, next){
  goNonSecurePaths(req, next);
  const apiKey = req.headers['api'];
  if( apiKey && apiKey === config.apiKey ){
    next();
  } else {
    next(boom.unauthorized())
  }
}

function goNonSecurePaths(req, next){
  const nonSecurePaths = ['/', '/about', '/contact'];
  if (nonSecurePaths.includes(req.path))
    return next();
}

module.exports = { checkApiKey };
