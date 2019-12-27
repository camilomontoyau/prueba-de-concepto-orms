exports.up = function(knex) {
  return knex.schema.createTable("tasks", function(table) {
    table.increments("id");
    table.string("name", 255).notNullable();
    table
      .boolean("done")
      .notNullable()
      .defaultTo(false);

    table
      .integer("user_id")
      .index()
      .references("id")
      .inTable("users");
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tasks");
};
