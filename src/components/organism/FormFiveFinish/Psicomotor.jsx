import { motion } from "framer-motion";


const Cognoscitivo = ({  page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Ámbito psicomotor</div>
      <label>Se desplaza con torpeza y se cae fácilmente</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <label>Camina y corre con dificultad.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <label> Al subir las escaleras no alterna los pies; requiere de apoyo.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
     
      <label>Tropieza con objetos que se encuentran a su paso.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <label>No puede cambiar de una acción o actividad a otra con facilidad.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Usa todos los dedos de las manos para agarrar o levantar objetos pequeño</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>No controla sus trazos al dibujar caminos, marcar contornos, unir los dibujos, etcétera.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>No toma adecuadamente el lápiz y las herramientas</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <button
        onClick={() => {
          alert("You've successfully submitted this form");
        }}
      >
        Submit
      </button>
      <br />
      <button
        onClick={() => {
          setPage(page - 1);
          setX(-1000);
        }}
      >
        Previous
      </button>
      <br/>
    </motion.div>
  );
};

export default Cognoscitivo