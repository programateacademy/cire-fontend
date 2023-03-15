import { motion } from "framer-motion";

const MonitoringTwo = ({ formData, setFormData, page, setPage, x, setX }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Seguimiento parte 2</div>
      <label>¿EL NIÑO(A) CUENTA CON HABITOS Y RUTINAS ESCOLARES?</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <input
        type="text"
        placeholder="Escribe una descripción"
        className="form-group"
        value={formData.descriptionSix}
        onChange={(e) =>
          setFormData({ ...formData, descriptionSix: e.target.value })
        }
      />
      <label>¿EL NIÑO(A) REFLEJA COMPORMISO?</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <input
        type="text"
        className="form-group"
        placeholder="Username"
        value={formData.descriptionSeven}
        onChange={(e) =>
          setFormData({ ...formData, descriptionSeven: e.target.value })
        }
      />
      <label>¿EL NIÑO(A) CUENTA CON ACOMPAÑAMIENTO EN CLASES?</label>
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
        onChange={(e) =>
          setFormData({ ...formData, descriptionEight: e.target.value })
        }
      />
      <label>¿EL NIÑO(A) CUENTA CON ACOMPAÑAMIENTO EN CASA?</label>
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
        onChange={(e) =>
          setFormData({ ...formData, descriptionNine: e.target.value })
        }
      />

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
    </motion.div>
  );
};

export default MonitoringTwo;
