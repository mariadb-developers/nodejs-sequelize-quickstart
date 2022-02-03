const db = require("../db.js");
const Customer = db.customers;

async function asyncFunction() {
    const customers = await Customer.findAll();
    console.log(JSON.stringify(customers));
}

asyncFunction();
