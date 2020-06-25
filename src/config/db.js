const { Pool } = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "000",
    host: "localhost",
    port: 5432,
    database: "gymmanager"

})