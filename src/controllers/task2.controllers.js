const pool = require("../db"); //exporto pool, para poder guardar los datos en la base de datos

const getAllTasks2 = async (req, res, next) => {
  // (try...catch) nos permite “atrapar” errores para que el script pueda, en lugar de morir, hacer algo más razonable.
  try {
    // código...
    const todasTareas = await pool.query("SELECT * FROM task2"); //utilizo esta funcion, para mostrar todas las tareas
    res.json(todasTareas.rows); //envio un json con todas las tareas
  } catch (error) {
    // manipulación de error
    next(error);
  }
};

//---------------------------------------------
const createTask2 = async (req, res, next) => {
  const { entero } = req.body; //extraigo los datos que se envian desde el frontend
  //El "req.body" es un objeto que viene desde el frontend, y lo que se va a guardar en la base de datos es el "title" y el "description"

  try {
    const result = await pool.query(
      //utilizo esta funcion, para guardar los datos en la base de datos
      //el task2 es el nombre de la tabla, y los datos que se van a guardar son el "title" y el "description"
      //le paso los datos que quiero guardar en $1 y $2
      "INSERT INTO task2 (entero) VALUES ($1) RETURNING *",
      [entero]
    );
    res.json(result.rows[0]); //envio un json con los datos que guarde
  } catch (error) {
    // manipulación de error
    next(error);
  }
};

module.exports = {
  getAllTasks2,
  createTask2,
};
//exporto el objeto que contiene las funciones que voy a utilizar en el archivo task.routes.js
