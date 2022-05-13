import { useState } from "react";
import FormularioFinal from "./FormularioFinal";

const TareaTerminada = () => {
  const [tarea, setTarea] = useState(false);

  return (
    <div>
      <p></p>
      {tarea ? "✅" : "☢"}

      {tarea ? <FormularioFinal /> : null}
      {/* {tarea ? <Delete /> : null} */}

      {!tarea ? (
        <button onClick={() => setTarea(true)}>Terminar Tarea</button>
      ) : null}
      {/* <button onClick={() => setTarea(false)}>Tarea terminada</button> */}
    </div>
  );
};
export default TareaTerminada;
