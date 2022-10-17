module.exports = {
    development: {
        postgres : {
            options: {
                host: process.env.HOST,
                port: process.env.DB_PORT,
                database: process.env.DB_NAME,
                dialect: 'postgres',
                username: process.env.USERNAME,
                password: process.env.DB_PASSWORD
            }
        }
    },
    production: {
        postgresurl: process.env.DATABASE_URL
    }
}