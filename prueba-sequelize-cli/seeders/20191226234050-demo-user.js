"use strict";
const faker = require("faker");
const moment = require("moment");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          created_at: moment().format(),
          updated_at: moment().format()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
