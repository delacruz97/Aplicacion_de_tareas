//definiendo las URL que el frontend va a poder acceder

const { Router } = require("express"); //importo Router de express

const router = Router(); //creo una variable que va a ser una instancia de express

/* const pool = require('../db'); //importo la conexion a la base de datos para ver si se conecta bien */

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controllers"); //importo las funciones que voy a utilizar en mis routes. desde el archivo task.controllers.js

const {
  getAllTasks2,
  createTask2,
} = require("../controllers/task2.controllers"); //importo las funciones que voy a utilizar en mis routes. desde el archivo task.controllers.js
/* router.get('/tasks', async (req, res) => { //creo una funcion que va a escuchar la url /
    const result = await pool.query("SELECT NOW()") //utilizo esta funcion, para ver si se conecta a la base de datos, con las credenciales dadas
    console.log(result)
    res.json(result.rows[0].now); //envio un json con la fecha actual
}); */

router.get("/tasks", getAllTasks);
router.get("/tasks2", getAllTasks2);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);
router.post("/tasks2", createTask2);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

module.exports = router; //exporto la variable router

//esta  ruta la utilizo en el archivo index.js##############################################
