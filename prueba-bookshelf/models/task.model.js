const bookshelf = require("../bookshelf");

module.exports = bookshelf.model("Task", {
  tableName: "tasks",
  hasTimestamps: true,
  user() {
    return this.belongsTo("User");
  }
});
