import { useMemo, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import "../App.css";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  reponsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
};

export default function LineChart() {
  const [prioridad2, setprioridad2] = useState([]);

  const [title, setTitle] = useState([]);

  const data = useMemo(() => {
    return {
      labels: title,

      datasets: [
        {
          label: "Prioridad de Mis Tareas",
          data: prioridad2,
          tension: 0.3,
          backgroundColor: "rgb(22, 239, 218,0.1)",
          borderColor: "rgb(22, 169, 218)",
          borderWth: 1,
          hoverBorderColor: "#FF0000",
          pointRadius: 3,
          pointBackgroundColor: "rgb(22, 169, 218)",
        },
      ],
    };
  }, [prioridad2, title]);

  const peticionApi = async () => {
    await axios.get("http://localhost:4000/tasks").then((res) => {
      //console.log(res.data);
      let respuesta1 = res.data;
      let auxprioridad2 = [];
      let auxTitle = [];
      respuesta1.map((elemento) => {
        auxprioridad2.push(elemento.prioridad2);
        auxTitle.push(elemento.title);
      });
      setprioridad2(auxprioridad2);
      setTitle(auxTitle);
    });
  };

  useEffect(() => {
    peticionApi();
  }, []);
  //----------------------

  return (
    <div className="graficaMedia">
      <Line data={data} options={options} />
    </div>
  );
}
