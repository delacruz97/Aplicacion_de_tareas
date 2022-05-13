import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import LineChart from "./components/LineChart";

import LineChart2 from "./components/LineChart2";

import { Container } from "@mui/material";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/**Menu */}
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
          <Route path="/grafico" element={<LineChart />} />
          <Route
            path="/porcentaje_de_tareas_realizadas"
            element={<LineChart2 />}
          />
        </Routes>
      </Container>
      {/* <div className="grafi">
        <LineChart />
      </div> */}
    </BrowserRouter>
  );
}
