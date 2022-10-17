// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: process.env.USERNAME,
//     password: process.env.DB_PASSWORD,
//     host: process.env.HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME
// })
// console.log('Database connected');
// module.exports = pool;


const { Sequelize, DataTypes } = require('sequelize')
const config = require('./config.js')[process.env.NODE_ENV || 'development']

// const sequelize = new Sequelize(config.postgres.options)
const sequelize = new Sequelize(process.env.DATABASE_URL)

sequelize
    .authenticate()
    .then(()=>{
        console.log('Database Connected')
    })
    .catch((err)=>{
        console.error("Couldn't connect to DB "+err.message)              
    })
const db ={}
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.todos=require('./todoModel')(sequelize, DataTypes);
sequelize.sync({force: false})

module.exports = db;