const { Pool } = require("pg"); //importo Pool de pg

const { db } = require("./config"); //importo el archivo config.js el cual contiene las credenciales de la base de datos

//EL NOMBRE DE LA CONSTANTE PUEDE SER db o pool, en mi caso lo puse como pool
const pool = new Pool({
  //creo una variable que va a ser una instancia de pg
  user: db.user, //usuario de la base de datos
  host: db.host, //host de la base de datos
  database: db.database, //nombre de la base de datos
  password: db.password, //contraseña de la base de datos
  port: db.port, //puerto de la base de datos
});

module.exports = pool; //exporto la variable pool
//la utilizo en el archivo tasks.routes.js para ver si se conecta bien a mi base de datos con las credenciales dadas&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//pero luego se utilizara en el archivo task.controllers.js
