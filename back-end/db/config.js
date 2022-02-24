const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PASSWORD } =
  process.env;

const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DB,
      user: PG_USER,
      password: PG_PASSWORD,
    };

const db = pgp(cn);

module.exports = db;
