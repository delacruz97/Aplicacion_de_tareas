import React from "react";
import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; //en versione precedente era solo useHistory

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const loadTasks = async () => {
    const res = await fetch("http://localhost:4000/tasks");
    const data = await res.json();
    /* console.log(data); */
    setTasks(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id)); // elimina la tarea
    } catch (error) {
      console.log(error);
    }
  }; // para eliminar una tarea

  //el useEffect no me permite escribir un async function
  useEffect(() => {
    loadTasks();
  }, []); // espera que se ejecute una sola vez

  return (
    <>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }} // esto me permite que el contenido se alinea a la derecha
          >
            <div>
              <Typography style={{ color: "#1E90FF" }}>
                <h3>{task.title}</h3>
              </Typography>
              <Typography style={{ color: "#ADD8E6" }}>
                {task.description}
              </Typography>
            </div>

            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(task.id)} // esto es para eliminar
                style={{ marginLeft: ".5rem" }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
