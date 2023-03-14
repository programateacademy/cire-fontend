import { motion } from "framer-motion";


const Family = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Recomendaciones Familiares</div>
      <label> Pautas de crianza</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Observaciones</label>
      <input
        type="text"
        placeholder="Observaciones"
        value={formData.descriptionOne}
        onChange={(e) => setFormData({ ...formData, descriptionOne: e.target.value })}
      />
      <label>Hábitos y rutinas</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>observaciones</label>
      <input
        type="text"
        placeholder="observaciones"
        value={formData.descriptionTwo}
        onChange={(e) => setFormData({ ...formData,descriptionTwo: e.target.value })}
      />
      <label> Hábitos y rutinas de estudios</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>observaciones</label>
      <input
        type="text"
        placeholder="Email"
        value={formData.descriptionThree}
        onChange={(e) => setFormData({ ...formData, descriptionThree: e.target.value })}
      />
      <label>Compromiso</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>observaciones</label>
      <input
        type="text"
        placeholder="Email"
        value={formData.descriptionFour}
        onChange={(e) => setFormData({ ...formData, descriptionFour: e.target.value })}
      />
      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        Next
      </button>
      <br/>
      <button
        onClick={() => {
          setPage(page - 1);
          setX(-1000);
        }}
      >
        Previous
      </button>
    </motion.div>
  );
};

export default Family