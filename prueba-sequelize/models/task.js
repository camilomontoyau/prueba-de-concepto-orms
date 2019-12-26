const Sequelize = require("sequelize");
const sequelize = require("../db");
const Model = Sequelize.Model;
const moment = require("moment");

class Task extends Model {}
Task.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  },
  {
    sequelize,
    modelName: "task",
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
    // options
  }
);

module.exports = Task;
