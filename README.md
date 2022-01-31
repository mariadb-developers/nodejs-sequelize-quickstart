## Quick Start: Sequelize (Node.js) and MariaDB

This repository will walk you through the process of quickly getting started with [Sequelize](https://sequelize.org/), a promise-based Node.js object-relational mapping (ORM) library, to connect to and communicate with a [MariaDB](https://mariadb.com) using the [MariaDB Node.js connector](https://github.com/mariadb-corporation/mariadb-connector-nodejs).

## Requirements

* [Node.js](https://nodejs.org/en/download/)
* [MariaDB](https://mariadb.com) - to get started with MariaDB check out [this guide](https://github.com/mariadb-developers/mariadb-getting-started)!

## Getting Started 

1.) Clone this repo.

```bash
$ git clone https://github.com/mariadb-developers/nodejs-sequelize-quickstart.git
```

2.) Create the database schema and load test data using the [schema.sql file](schema.sql). 

You can do this by either copying, pasting and executing the SQL in [schema.sql](schema.sql) or with the MariaDB command-line client (from within the `nodejs-sequelize-quickstart` directory, which you just pulled down).

_For example:_
```bash 
$ mariadb --host 127.0.0.1 --user root --pRootPassword123! < schema.sql
```

3.) Step in to the [src](src) directory and install the [MariaDB Node.js driver (connector)](https://www.npmjs.com/package/mariadb) using [npm](npmjs.com), [Sequelize](https://www.npmjs.com/package/sequelize) and [dotenv](https://www.npmjs.com/package/dotenv) (a zero-dependency module that loads environment variables from a `.env` file).


```bash
$ npm install mariadb sequelize
```

4.) Within [src](src), create an environment file (e.g. `$ touch .env`) and add _your_ database connection settings.

_For example:_
``` 
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASS=RootPassword123!
DB_NAME=demo
```

5.) Update the connection configuration to point to _your_ database in the JavaScript sample files. For example, [here](src/db.js#L4-L11).

6.) Execute the sample JavaScript files using the `node` [CLI command](https://nodejs.org/api/cli.html).

_For example:_
```bash
$ node src/queries/customers_basic.js

$ node src/queries/customers_relationships.js

$ node src/queries/orders.js

...
```

**The scripts:**

* [customers_basics.js](src/queries/customers_basics.js) - select all customers using a [Sequelize model](https://sequelize.org/master/manual/model-basics.html) and `findAll` function.

* [customers_relationaships.js] - - select all customers using a [Sequelize model](https://sequelize.org/master/manual/model-basics.html) and `findAll` function, which includes loaded child models based configured [associations](https://sequelize.org/master/manual/assocs.html) (in [db.js](src/db.js#L18-L24)).

* [orders.js] - select all orders using a [Sequelize model](https://sequelize.org/master/manual/model-basics.html) and `findAll` function, which includes loaded child models based configured [associations](https://sequelize.org/master/manual/assocs.html) (in [db.js](src/db.js#L18-L24)).

## Helpful Resources

* [Quick Start: Node.js and MariaDB](https://github.com/mariadb-developers/nodejs-quickstart) - Start here if you're just getting started with Node.js and MariaDB!
* [Official MariaDB Documentation](https://mariadb.com/docs)
* [MariaDB Connector/Node.js Source Code](https://github.com/mariadb-corporation/mariadb-connector-nodejs)
* [MariaDB Quickstart Guide](https://github.com/mariadb-developers/mariadb-getting-started)
* [Official Sequelize Documentation](https://sequelize.org/master/index.html)

## Support and Contribution

Please feel free to submit PR's, issues or requests to this project directly.

If you have any other questions, comments, or looking for more information on MariaDB please check out:

* [MariaDB Developer Hub](https://mariadb.com/developers)
* [MariaDB Community Slack](https://r.mariadb.com/join-community-slack)

Or reach out to us directly via:

* [developers@mariadb.com](mailto:developers@mariadb.com)
* [MariaDB Twitter](https://twitter.com/mariadb)

## License <a name="license"></a>
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=plastic)](https://opensource.org/licenses/MIT)