const path = require("path");
module.exports = {
  client: "postgresql",
  connection: `postgres://postgres@localhost:5432/prueba-bookshelf`,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: path.join(".", "/db/migrations"),
    tableName: "migrations"
  },
  seeds: {
    directory: path.join(".", `/db/seeds`)
  }
};
