// const { Pool } = require('pg');

// const pool = new Pool({
//     host: 'ec2-52-204-113-104.compute-1.amazonaws.com',
//     user: 'nfuvpcisleiirt',
//     password: '8dea24ddfaa8e8ed13004381ace4af09011694341b003f0abeb0ec599dc7546c',
//     database: 'd40flvhb5ru8e7'
// });

// const mysql = require ('mysql');
// const { promisify } = require('util');

// const { database } = require('./keys');

// const pool = mysql.createPool(database);

// pool.getConnection((err, connection) => {
//     if (err) {
//         if (err.code === 'PROTOCOL_CONECTION_LOST') {
//             console.error ('DATABASE CONNECTION WAS CLOSED');
//         }
//         if (err.code === 'ER_CON_COUNT_ERROR') {
//             console.error('DATABASE HAS TOO MANY CONNECTIONS');
//         }
//         if (err.code === 'ECONNREFUSED') {
//             console.error('DATABASE CONNECTION WAS REFUSED');
//         }
//     }

//     if (connection) connection.release();
//     console.log('Db is connected');
//     return;
// });

// // Promisisfy pool querys
// pool.query = promisify(pool.query);

// module.exports = pool;