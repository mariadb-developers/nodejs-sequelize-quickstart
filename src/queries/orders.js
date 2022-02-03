const db = require("../db.js");
const Order = db.orders;
const Customer = db.customers;
const Product = db.products;

Order.findAll({
        include: [
            {
                model: Customer,
                as: 'customer',
                attributes: ['id','first_name','last_name']
            },
            {
                model: Product,
                as: 'product',
                attributes: ['id','name','amount']
            },
        ]
    })
    .then(results => {
        console.log(JSON.stringify(results));
    })
    .catch(err => {
        console.log(err);
    });
