module.exports = (sequelize, Sequelize) => {
    const Pin = sequelize.define("pin", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      }
    });
    return Pin;
  };
  