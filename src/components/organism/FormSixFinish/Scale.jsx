import { motion } from "framer-motion";


const Cognoscitivo = ({  page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">La Escala de Balance Afectivo</div>
      <h1>1.poco o nunca</h1>
      <h1>A veces</h1>
      <h1>Genralmente o Mucho</h1>
      <label>¿Se ha sentido molestado por alguien?</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      
      <label>¿Se ha sentido muy solo o distante de la gente?</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      
      <label>¿Ha sentido que las cosas iban como usted quería?</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
     
      <label>¿Se ha sentido muy preocupado?</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      
      <label>¿Se ha sentido contento por tener buenos amigos o amigas?</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label>¿Ha tenido mieod de lo que pudiera suceder?</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label>¿Se ha sentido particularmente estimulado o interesado por algo?</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label>¿Se ha sentido deprimido o muy infeliz?</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label>¿Se ha sentido lleno de energía?</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label>¿Se ha sentido muy cansado? </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label> ¿Se ha sentido muy inquieto que no podia permanecer sentado en una silla? </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label> ¿Ha sentido que se estaba diviertiendo mucho? </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label> ¿Se ha sentido muy alegre o feliz? </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <label> ¿Se ha sentido con ganas de llorar? </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label> ¿Se ha sentido eufórico? </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label> ¿Se ha sentido seguro respecto al futuro? </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label> ¿Se ha sentido aburrido? </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label> ¿Se ha sentido contento o satisfecho por haber logrado algo? </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <button
        onClick={() => {
          alert("You've successfully submitted this form");
        }}
      >
        Submit
      </button>
      <br/>
    </motion.div>
  );
};

export default Cognoscitivo