//check env.
var env = process.env.NODE_env || 'development' ;
// fetch env. config
var config = require('./config.json');
var envConfig = config[env];
// add env. config values to process.env
Object.keys(enConfig).forEach(key => process.env[key]= envConfig[key]);