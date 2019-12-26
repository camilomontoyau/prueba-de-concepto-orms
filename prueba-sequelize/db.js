const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres@localhost:5432/prueba-sequelize"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("la base de datos está conectada.");
  })
  .catch(err => {
    console.error("la base de datos no se pudo conectar:", err);
  });

sequelize.sync({ force: true });

module.exports = sequelize;
