import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Support = ({ formData, setFormData, page, setPage, x, setX, onSaveFormData }) => {
  const [stateFromApi, setStateFromApi] = useState(null);

  // Resto del código


  const handleSaveData = (event) => {
    event.preventDefault();
    onSaveFormData(formData); // Llamar a la función pasada como prop
    setPage(2);
  };

  useEffect(() => {
    axios.get('https://cire-backend.onrender.com/principalForm')
      .then(response => {
        const familySupportData = response.data.familySupport;
        setStateFromApi(familySupportData);
      })
      .catch(error => {
        console.log('There was an error!', error);
      });
  }, []);
  
  useEffect(() => {
    if (stateFromApi) {
      setFormData((formData) => ({
        ...formData,
        descriptionSeven: stateFromApi?.parentingGuidelines?.description || '',
        actionSeven: stateFromApi?.parentingGuidelines?.actionPlan || '',
        descriptionEight: stateFromApi?.accompaniment?.description || '',
        actionEight: stateFromApi?.accompaniment?.actionPlan || '',
      }));
    }
  }, [stateFromApi]);
  

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
    placeholder="Escribe una descripción..."
    value={formData.descriptionSeven}
    onChange={(e) =>
      setFormData({ ...formData, descriptionSeven: e.target.value })
    }
  />
  <label>Plan de acción</label>
  <input
    type="text"
    placeholder="Escribe un plan de acción..."
    value={formData.actionSeven}
    onChange={(e) =>
      setFormData({ ...formData, actionSeven: e.target.value })
    }
  />
  <br />
  <label>Acompañamiento</label>
  <label>Descripción</label>
  <input
    type="text"
    placeholder="Escribe una descripción..."
    value={formData.descriptionEight}
    onChange={(e) =>
      setFormData({ ...formData, descriptionEight: e.target.value })
    }
  />
  <label>Plan de acción</label>
  <input
    type="text"
    placeholder="Escribe un plan de acción..."
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
