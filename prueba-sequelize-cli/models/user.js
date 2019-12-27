"use strict";
const moment = require("moment");
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
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
  user.associate = function(models) {
    user.hasMany(models.task, {
      foreignKey: "user_id"
    });
  };
  return user;
};
