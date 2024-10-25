// This is a new file for solution!
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Performances', {
      // TO-DO: You must insert the following fields in Performances table:
      // id (PK integer)
      // group (string)
      // appointment (date)
      // restaurantId (FK integer referencing 'id' in Restaurants table)
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }  
    })
  },

  down: async (queryInterface, Sequelize)  => {
    await queryInterface.dropTable('Performances')
  }
};
