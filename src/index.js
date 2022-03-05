const express = require("express"); //importo express desde node_modules
const morgan = require("morgan"); //importo morgan desde node_modules
const cors = require("cors"); //importo cors desde node_modules, el mismo me permite hacer peticiones desde cualquier origen

const taskRoutes = require("./routes/tasks.routes"); //importo las rutas de las tareas

const app = express(); //creo una variable que va a ser una instancia de express

app.use(cors()); //utilizo cors, me permite conectarme desde cualquier origen de manera simple, es la conexion entre el servidor y el cliente

app.use(morgan("dev")); //uso morgan para mostrar por consola las peticiones que se hacen

app.use(express.json()); //uso express.json para que el servidor entienda los datos que se envian en formato json.sino no se entenderan las peticiones que se hagan desde post.

app.use(taskRoutes); //uso las rutas de las tareas

app.use((err, req, res, next) => {
  //creo una funcion que va a manejar los errores))
  return res.status(500).json({
    message: err.message,
  });
});

app.listen(4000, () => {
  //creo una funcion que escucha el puerto 4000
  console.log("Server is running on port 4000");
});
