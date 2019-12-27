// Update with your config settings.

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: null,
    database: "prueba-bookshelf",
    charset: "utf8"
  }
});
const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;
