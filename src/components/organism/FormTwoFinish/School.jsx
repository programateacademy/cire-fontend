import { motion } from "framer-motion";


const School = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Recomendaciones escolares</div>
      <label>Normas dentro del aula</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <input
          type="text"
          placeholder="Escribe una descripción"
          className="form-group"
          value={formData.descriptionSix}
          onChange={(e) => setFormData({ ...formData, descriptionSix: e.target.value })}
        />
        <label>Normas fuera del aula</label>
        <select>
        <option>SI</option>
        <option>NO</option>
      </select>
        <input
          type="text"
          className="form-group"
          placeholder="Username"
          value={formData.descriptionSeven}
          onChange={(e) => setFormData({ ...formData, descriptionSeven: e.target.value })}
        />
        <label>Acompañamiento</label>
        <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Observaciones</label>
        <input
          type="text"
          className="form-group"
          placeholder="Password"
          value={formData.descriptionEight}
          onChange={(e) => setFormData({ ...formData, descriptionEight: e.target.value })}
        />
        <label>Compromiso</label>
        <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Observaciones</label>
        <input
          type="text"
          className="form-group"
          placeholder="Password"
          value={formData.descriptionNine}
          onChange={(e) => setFormData({ ...formData,descriptionNine: e.target.value })}
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

export default School