import { motion } from "framer-motion";


const Support = ({ formData, setFormData, page, setPage, x, setX }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Recomendaciones en CIRE</div>
      <label>Pautas de crianza</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Observaciones</label>
      <input
        type="text"
        placeholder="Occupation"
        value={formData.descriptionTen}
        onChange={(e) =>
          setFormData({ ...formData, descriptionTen: e.target.value })
        }
      />
      <label>Hábitos y rutinas</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Observaciones</label>
      <input
        type="text"
        placeholder="About"
        value={formData.descriptionEleven}
        onChange={(e) => setFormData({ ...formData, descriptionEleven: e.target.value })}
      />
      <label>Acompañamiento</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Observaciones</label>
      <input
        type="text"
        placeholder="About"
        value={formData.descriptionTwelve}
        onChange={(e) => setFormData({ ...formData, descriptionTwelve: e.target.value })}
      />
      <label>Normas</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Observaciones</label>
      <input
        type="text"
        placeholder="About"
        value={formData.descriptionThirteen}
        onChange={(e) => setFormData({ ...formData, descriptionThirteen: e.target.value })}
      />
      <label>Normas</label>
      <select>
        <option>SI</option>
        <option>NO</option>
      </select>
      <label>Compromiso</label>
      <input
        type="text"
        placeholder="About"
        value={formData.descriptionFourteen}
        onChange={(e) => setFormData({ ...formData, descriptionFourteen: e.target.value })}
      />
      <br />
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

export default Support