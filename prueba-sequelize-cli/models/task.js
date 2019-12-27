"use strict";
const moment = require("moment");
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define(
    "task",
    {
      name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      done: DataTypes.BOOLEAN
    },
    {
      timestamps: false,
      underscored: true,
      hooks: {
        beforeUpdate: user => {
          user.updated_at = moment().format();
        },
        beforeSave: user => {
          user.updated_at = moment().format();
        }
      }
    }
  );
  task.associate = function(models) {};
  return task;
};

/* cómo se crean los modelos?
cómo se crean las relaciones?
crea las tablas y los campos en snake_case y también prevalece la notación snake_case en el objecto creado por el orm?
tiene migrations?
tiene seeds? */
