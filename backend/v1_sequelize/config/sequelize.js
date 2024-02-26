const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development'; // This can be set in your environment variables
const config = require('./config.json')[env]; // Adjust the path to where your config.json is located
console.log(config);
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  define: config.define || {} // Fallback to an empty object if define is not provided
  // additional options
});
sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});
module.exports = sequelize;
