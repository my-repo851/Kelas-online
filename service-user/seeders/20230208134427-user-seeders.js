'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('users', [
      {
        name: "Reza",
        profession: "Admin Micro",
        role: "admin",
        email: "muhammadreza@gmail.com",
        password: await bcrypt.hash('reza851', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Mail",
        profession: "Front End Developer",
        role: "student",
        email: "mail@gmail.com",
        password: await bcrypt.hash('mail123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkDelete('users', null, {});
  }
};