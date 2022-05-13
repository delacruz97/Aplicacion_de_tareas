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
  const [entero, setEntero] = useState([]);
  const [id, setId] = useState([]);

  const data = useMemo(() => {
    return {
      labels: id,

      datasets: [
        {
          label: "Tareas Terminadas",
          data: entero,
          tension: 0.3,
          backgroundColor: "rgb(200, 150, 254, 0.2)",
          borderColor: "rgb(224, 46, 254)",
          borderWth: 1,
          hoverBorderColor: "#FF0000",
          pointRadius: 3,
          pointBackgroundColor: "rgb(224, 46, 254)",
        },
      ],
    };
  }, [entero, id]);

  //----------------------
  const peticionApi2 = async () => {
    await axios.get("http://localhost:4000/tasks2").then((res) => {
      //console.log(res.data);
      let respuesta2 = res.data;
      let auxprioridad = [];
      let auxIde = [];
      respuesta2.map((elemento) => {
        auxprioridad.push(elemento.entero);
        auxIde.push(elemento.entero);
      });
      setEntero(auxprioridad);
      setId(auxIde);
    });
  };

  useEffect(() => {
    peticionApi2();
  }, []);

  return (
    <div className="graficaMedia">
      <Line data={data} options={options} />
    </div>
  );
}
