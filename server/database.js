const poolOptions = {
    user: 'root',
    database: 'doe',
    password: '',
    host: 'localhost',
    port: 3306,
    max: 10,
    connectTimeout: 30000
};

const mysql = require('promise-mysql');
module.exports = mysql.createPool(poolOptions);