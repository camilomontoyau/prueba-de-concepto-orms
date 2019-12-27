exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          last_name: "lastname 1",
          first_name: "firstname 1",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          last_name: "lastname 2",
          first_name: "firstname 2",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          last_name: "lastname 3",
          first_name: "firstname 3",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          last_name: "lastname 4",
          first_name: "firstname 4",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          last_name: "lastname 5",
          first_name: "firstname 5",
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
