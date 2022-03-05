const { config } = require("dotenv"); //requiero dotenv
config(); //configuro dotenv

module.exports = {
  db: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
};

//importo este archivo desde db.js
