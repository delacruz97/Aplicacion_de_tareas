import React from "react";
import {
  AppBar, // Barra de navegación
  Box, // Contenedor
  Button, // Botón
  Container, // Contenedor
  Toolbar, // Barra de herramientas
  Typography, // Texto
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom"; // Link y useNavigate los cuales nos permiten navegar entre
import "../App.css"; // para que se vea bien en el navegador

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {" "}
      {/*esto me permite que el contenedor se expanda*/}
      <AppBar position="static" color="transparent">
        {" "}
        {/*Barra de navegación*/}
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                {/* PERN Stack */}
                <h1 className="letra">MaxTareas</h1>
              </Link>
            </Typography>

            <br />

            {/* <Link
              to="/grafico"
              style={{ textDecoration: "none", color: "white" }}
            >
              📊Grafico -
            </Link> */}

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/tasks/new")}
            >
              New Task
            </Button>
          </Toolbar>
        </Container>
        <div className="grafica">
          <Link
            to="/grafico"
            style={{ textDecoration: "none", color: "white" }}
          >
            📊Grafica de tareas
          </Link>
        </div>
      </AppBar>
    </Box>
  );
}
