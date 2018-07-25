'use strict'

require('dotenv').config({ silent: true })

module.exports = {
  client: 'postgresql',
  connection: process.env.DB_CONNECTION_STRING,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
}
