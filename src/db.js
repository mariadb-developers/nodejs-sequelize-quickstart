require('dotenv').config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mariadb',
  define: {
    timestamps: false
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./models/customer.model.js")(sequelize, Sequelize);
db.products = require("./models/product.model.js")(sequelize, Sequelize);
db.orders = require("./models/order.model.js")(sequelize, Sequelize);

db.customers.hasMany(db.orders,{ as: 'orders', foreignKey: 'customer_id' });
db.orders.belongsTo(db.products,{ as: 'product', foreignKey: 'product_id' });
db.orders.belongsTo(db.customers,{ as: 'customer', foreignKey: 'customer_id' });

module.exports = db;