module.exports = {
    HOST: "localhost",
    USER: "carpet_user",
    PASSWORD: "squirt",
    DB: "carpetdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };