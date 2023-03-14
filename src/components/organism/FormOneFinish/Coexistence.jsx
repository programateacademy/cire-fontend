import { motion } from "framer-motion";
const Coexistence = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Convivencia</div>
      <label>Comportamiento escolar</label>
      <label>Descripción</label>
      <input
          type="text"
          placeholder="Escribe una descripción..."
          className="form-group"
          value={formData.descriptionFour}
          onChange={(e) => setFormData({ ...formData, descriptionFour: e.target.value })}
        />
        <label>Plan de acción</label>
      <input
          type="text"
          placeholder="Escribe el plan de acción..."
          className="form-group"
          value={formData.actionFour}
          onChange={(e) => setFormData({ ...formData, actionFour: e.target.value })}
        />
        <label>comportamiento en casa</label>
        <label>Descripción</label>
        <input
          type="text"
          className="form-group"
          placeholder="Escribe una descripción..."
          value={formData.descriptionFive}
          onChange={(e) => setFormData({ ...formData, descriptionFive: e.target.value })}
        />
         <label>Plan de acción</label>
      <input
          type="text"
          placeholder="Escribe el plan de acción..."
          className="form-group"
          value={formData.actionFive}
          onChange={(e) => setFormData({ ...formData, actionFive: e.target.value })}
        />
        <label>relaciones interpersonales</label>
        <label>descripción</label>
        <input
          type="text"
          className="form-group"
          placeholder="Escribe una descripción..."
          value={formData.descriptionSix}
          onChange={(e) => setFormData({ ...formData, descriptionSix: e.target.value })}
        />
         <label>Plan de acción</label>
      <input
          type="text"
          placeholder="Escribe el plan de acción..."
          className="form-group"
          value={formData.actionSix}
          onChange={(e) => setFormData({ ...formData, actionSix: e.target.value })}
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

export default Coexistence