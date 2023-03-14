import { motion } from "framer-motion";


const Cognoscitivo = ({  page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Ámbito cognoscitivo</div>
      <label>Muestra una actitud indiferente ante los estímulos que recibe</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <label>Le implica mucho esfuerzo permanecer quieto en un mismo sitio por espacios cortos de tiempo</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <label> Presenta falta de interés en las actividades de grupo.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
     
      <label>A menudo no puede terminar lo que comienza.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      
      <label>Se le dificulta entender instrucciones y ejecutarlas al ritmo del resto del grupo.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Se cansa con facilidad y no le importa la calidad al realizar sus trabajos</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Pide que se le repita la orden varias veces.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Tiene dificultad para organizarse y terminar el trabajo.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Presenta dificultad para recordar lo que se le acaba de decir.</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label>Se acerca demasiado los objetos a los ojos para observarlos o reconocerlos. </label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label> Se le dificulta identificar sonidos. </label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label> No coopera en juegos de grupo. </label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label> No puede realizar la actividad solo/a; necesita ayuda directa o permanente. </label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label> No articula algunos fonemas de manera correcta. </label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label> Tartamudea </label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label> No se comunica con su instructor o sus compañeros. </label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label> Se comunica por medio de mímica o gestos. </label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label> Responde rara vez cuando otros le hablan. </label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>

      <label> No presta atención cuando se le habla. </label>
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