exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, last_name: "lastname 1", first_name: "firstname 1" },
        { id: 2, last_name: "lastname 2", first_name: "firstname 2" },
        { id: 3, last_name: "lastname 3", first_name: "firstname 3" },
        { id: 4, last_name: "lastname 4", first_name: "firstname 4" },
        { id: 5, last_name: "lastname 5", first_name: "firstname 5" }
      ]);
    });
};
