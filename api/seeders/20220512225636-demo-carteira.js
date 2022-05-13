'use strict';



module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('carteiras', [{
        name: 'name',
        cpf: '123456789',
        birthday: '2000-04-01',
        createdAT: new Date() ,
        updatedAT: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkDelete('carteiras', null, {});
     
  }
};
