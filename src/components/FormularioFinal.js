import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; //

export default function TaskForm() {
  const [task2, setTask2] = useState({
    entero: "",
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* console.log(task); // muestra el objeto task por consola */

    setLoading(true); // cambia el estado de loading a true

    if (editing) {
      /* console.log("update"); */
      await fetch("http://localhost:4000/tasks2", {
        method: "POST",
        body: JSON.stringify(task2),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      await fetch("http://localhost:4000/tasks2", {
        method: "POST",
        body: JSON.stringify(task2),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    setLoading(false); // para que se pare el loading
    navigate("/porcentaje_de_tareas_realizadas"); // navega a la ruta raiz
  };

  const handleChange = (e) => {
    /* console.log(e.target.name, e.target.value); */
    setTask2({ ...task2, [e.target.name]: e.target.value });
  };

  const loadTask = async () => {
    const res = await fetch(`http://localhost:4000/tasks2/${params.id}`);
    const data = await res.json();
    /* console.log(data); */
    setTask2({
      entero: data.entero,
    }); // esto me permite que el formulario se rellene con la tarea que se quiere editar
    setEditing(true);
  }; // para cargar una tarea

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "#1e272e", padding: "1rem" }}
        >
          <Typography variant="5" textAlign="center" color="white">
            {editing ? "Edit Task" : "Puntua tu progreso"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Ingrese un numero entre (1-10) para ver su progreso"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="entero"
                value={task2.entero}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task2.entero}
              >
                {" "}
                {/* si no hay titulo o descripcion no se puede enviar el formulario */}
                {loading ? (
                  <CircularProgress size={24} color="secondary" />
                ) : (
                  "Save"
                )}{" "}
                {/* si esta cargando muestra el circulo de carga */}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
