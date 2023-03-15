import { motion } from "framer-motion";


const MonitoringOne = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Seguimiento parte 1</div>
      <label>¿EL NIÑO(A) CUENTA CON PAUTAS DE CRIANZA?</label>
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
      <label>¿EL NIÑO(A) SIGUE NORMAS DENTRO DEL AULA?</label>
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
      <label> ¿EL NIÑO(A)  SIGUE NORMAS FUERA DEL AULA??</label>
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
      <label>¿EL NIÑO(A)  CUENTA CON HABITOS Y RUTINAS?</label>
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
    </motion.div>
  );
};

export default MonitoringOne