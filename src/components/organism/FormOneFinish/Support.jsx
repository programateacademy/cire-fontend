import { motion } from "framer-motion";
import React, { useEffect, useCallback } from "react";


const Support = ({ formData, setFormData, page, setPage, x, setX, onSaveFormData }) => {
  const handleSaveData = (event) => {
    event.preventDefault();
    onSaveFormData(formData); // Llamar a la función pasada como prop
    setPage(2);
  };

  const saveFormData = useCallback(() => {
    localStorage.setItem("formulario", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const savedData = localStorage.getItem("formulario");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [setFormData]);

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Apoyo familiar</div>
      <label>Pautas de crianza</label>
      <label>Descripción</label>
      <input
        type="text"
        placeholder="Occupation"
        value={formData.descriptionSeven}
        onChange={(e) =>
          setFormData({ ...formData, descriptionSeven: e.target.value })
        }
      />
      <label>Plan de acción</label>
      <input
        type="text"
        placeholder="Escribe un plan de acción"
        value={formData.actionSeven}
        onChange={(e) =>
          setFormData({ ...formData, actionSeven: e.target.value })
        }
      />
      <label>Acompañamiento</label>
      <label>Descripción</label>
      <input
        type="text"
        placeholder="About"
        value={formData.descriptionEight}
        onChange={(e) =>
          setFormData({ ...formData, descriptionEight: e.target.value })
        }
      />
      <label>Plan de acción</label>
      <input
        type="text"
        placeholder="Escribe un plan de acción"
        value={formData.actionEight}
        onChange={(e) =>
          setFormData({ ...formData, actionEight: e.target.value })
        }
      />
      <br />
      <button onClick={handleSaveData}>Enviar</button>

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

export default Support;
