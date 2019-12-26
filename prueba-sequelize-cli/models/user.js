"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    },
    {}
  );
  user.associate = function(models) {
    user.hasMany(models.tasks, {
      foreignKey: "user_id"
    });
  };
  return user;
};
