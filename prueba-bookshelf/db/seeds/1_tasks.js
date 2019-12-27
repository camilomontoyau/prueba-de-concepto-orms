exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          name: "lastname 1",
          done: false,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: "lastname 2",
          done: false,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: "lastname 3",
          done: true,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          name: "lastname 4",
          done: false,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          name: "lastname 5",
          done: false,
          user_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
