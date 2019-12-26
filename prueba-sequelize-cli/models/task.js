"use strict";
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define(
    "task",
    {
      name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    },
    {}
  );
  task.associate = function(models) {};
  return task;
};
