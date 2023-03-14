import { motion } from "framer-motion";
const Academic = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Académico</div>
      <label> Trabajo en clase</label>
      <label>Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción"
        value={formData.descriptionOne}
        onChange={(e) => setFormData({ ...formData, descriptionOne: e.target.value })}
      />
      <label>Plan de acción</label>
      <input
        type="text"
        placeholder="Escribe el plan de acción"
        value={formData.actionOne}
        onChange={(e) => setFormData({ ...formData, actionOne: e.target.value })}
      />
      <label> Trabajo en ciré</label>
      <label>Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción"
        value={formData.descriptionTwo}
        onChange={(e) => setFormData({ ...formData, descriptionTwo: e.target.value })}
      />
      <label>Plan de acción</label>
      <input
        type="text"
        placeholder="Escribe el plan de acción"
        value={formData.actionTwo}
        onChange={(e) => setFormData({ ...formData, actionTwo: e.target.value })}
      />
      <label> Trabajo en casa</label>
      <label>Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción"
        value={formData.descriptionThree}
        onChange={(e) => setFormData({ ...formData, descriptionThree: e.target.value })}
      />
      <label>Plan de acción</label>
      <input
        type="text"
        placeholder="Escribe el plan de acción"
        value={formData.actionThree}
        onChange={(e) => setFormData({ ...formData, actionThree: e.target.value })}
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

export default Academic