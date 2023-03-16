import { motion } from "framer-motion";
import React, { useEffect, useCallback } from "react";
import axios from 'axios';

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

  useEffect(() => {
    axios.get('https://cire-backend.onrender.com/principalForm')
        .then(response => {
            const coexistenceData = response.data.coexistence;
                    setFormData((formData) => ({
                        ...formData,
                        descriptionSeven: coexistenceData?.familySupport?.description || '',
                        actionSeven: coexistenceData?.familySupport?.actionPlan || '',
                        descriptionEight: coexistenceData?.companionship?.description || '',
                        actionEight: coexistenceData?.companionship?.actionPlan || '',
                    }));
          })
          .catch(error => {
            console.log('There was an error!', error);
           });
    }, []);
    

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
