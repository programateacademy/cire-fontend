import { motion } from "framer-motion";


const Cognoscitivo = ({  page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Ámbito psicosocial</div>
      <label>Necesita mucho apoyo de su maestro.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <label>No se adapta con facilidad a situaciones nuevas, diferentes, que tengan mayor grado de dificultad.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <label> Muerde o maltrata sus pertenencias y sus trabajos escolares.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
     
      <label>Muestra inadaptación escolar prolongada</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <label>Llora por cualquier cosa.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>No expresa o verbaliza sus sentimientos.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>No juega con otros niños.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>No interactúa con los adultos</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      

      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        Next
      </button>
      <br/>
    </motion.div>
  );
};

export default Cognoscitivo