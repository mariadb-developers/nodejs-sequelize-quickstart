const db = require("../db.js");
const Customer = db.customers;
const Order = db.orders;
const Product = db.products;

Customer.findAll({
        include: [
            {
                model: Order,
                as: 'orders',
                attributes: ['id','quantity'],
                include: [{
                    model: Product,
                    as: 'product',
                    attributes: ['id','name','amount']
                }]
            }
        ]
    })
    .then(results => {
        console.log(JSON.stringify(results));
    })
    .catch(err => {
        console.log(err);
    });
