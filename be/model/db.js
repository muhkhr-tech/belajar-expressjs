const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'belajar_expressjs_db',
 'admin',
 '123',
  {
    host: 'localhost',
    port: '3333',
    dialect: 'mysql',
  }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 module.exports = sequelize;