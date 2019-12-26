const Sequelize = require("sequelize");
const sequelize = require("../db");
const Model = Sequelize.Model;
const moment = require("moment");
const Task = require("./task");

class User extends Model {}
User.init(
  {
    // attributes
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING
      // allowNull defaults to true
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
    modelName: "user",
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

User.belongsToMany(Task, { through: "user_task", underscored: true });

/* 
Task.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
  constraints: false,
  underscored: true
}); */

module.exports = User;
