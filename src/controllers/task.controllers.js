const pool = require("../db"); //exporto pool, para poder guardar los datos en la base de datos

const getAllTasks = async (req, res, next) => {
  // (try...catch) nos permite “atrapar” errores para que el script pueda, en lugar de morir, hacer algo más razonable.
  try {
    // código...
    const todasTareas = await pool.query("SELECT * FROM task"); //utilizo esta funcion, para mostrar todas las tareas
    res.json(todasTareas.rows); //envio un json con todas las tareas
  } catch (error) {
    // manipulación de error
    next(error);
  }
};

//---------------------------------------------

const getTask = async (req, res, next) => {
  //destructuring

  try {
    // código...
    const { id } = req.params; //extraigo el id que se envio desde el frontend
    const tarea = await pool.query("SELECT * FROM task WHERE id = $1", [id]); //utilizo esta funcion, para mostrar una tarea en especifico

    if (tarea.rows.length === 0) {
      //si no hay ninguna tarea con ese id entonces envio un json con un mensaje   y un codigo de error
      return res.status(404).json({
        message: "tarea no encontrada",
      });
    } //si no encuentra la tarea, envio un json con el mensaje de que no encontro la tarea
    res.json(tarea.rows[0]); //envio un json con la tarea en especifico
  } catch (error) {
    // manipulación de error
    next(error);
  }
};

//---------------------------------------------

const createTask = async (req, res, next) => {
  const { title, description } = req.body; //extraigo los datos que se envian desde el frontend
  //El "req.body" es un objeto que viene desde el frontend, y lo que se va a guardar en la base de datos es el "title" y el "description"

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *", //utilizo esta funcion, para guardar los datos en la base de datos
      //el task es el nombre de la tabla, y los datos que se van a guardar son el "title" y el "description"
      [title, description] //le paso los datos que quiero guardar en $1 y $2
    );
    res.json(result.rows[0]); //envio un json con los datos que guarde
  } catch (error) {
    // manipulación de error
    next(error);
  }
};

//---------------------------------------------

const updateTask = async (req, res) => {
  try {
    const { id } = req.params; //extraigo el id que se envio desde el frontend
    const { title, description } = req.body; //extraigo los datos que se envian desde el frontend
    /* console.log(id, title, description); */

    const result = await pool.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    ); //utilizo esta funcion, para actualizar los datos en la base de datos

    if (result.rows.length === 0) {
      //si no hay ninguna tarea con ese id entonces envio un json con un mensaje   y un codigo de error
      return res.status(404).json({
        message: "tarea no encontrada",
      });
    } //si no encuentra la tarea, envio un json con el mensaje de que no encontro la tarea

    return res.json(result.rows[0]); //envio un json con los datos que actualize
  } catch (error) {
    // manipulación de error
    next(error);
  }
};

//---------------------------------------------

const deleteTask = async (req, res) => {
  const { id } = req.params; //extraigo el id que se envio desde el frontend
  /* console.log(id); */
  try {
    const result = await pool.query("DELETE FROM task WHERE id = $1", [id]); //utilizo esta funcion, para eliminar una tarea en especifico

    if (result.rowCount === 0) {
      //si no hay ninguna tarea con ese id entonces envio un json con un mensaje   y un codigo de error
      return res.status(404).json({
        message: "tarea no encontrada",
      });
    } //si no encuentra la tarea, envio un json con el mensaje de que no encontro la tarea
    res.json({ message: "tarea eliminada" }); //envio un json con el mensaje de que elimino la tarea
  } catch (error) {
    // manipulación de error
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
//exporto el objeto que contiene las funciones que voy a utilizar en el archivo task.routes.js
