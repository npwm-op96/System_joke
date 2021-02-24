module.exports = (sequelize, Sequelize) => {
    const Joke = sequelize.define("jokes", {
      joke: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      status:{
        type: Sequelize.BOOLEAN
      }
    });
    return Joke;
  };