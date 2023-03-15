
<label>Descripción</label>
import React, { useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

const Coexistence = ({ formData, setFormData, page, setPage, x, setX }) => {
  const stateFromLocalStorage = useMemo(() => JSON.parse(localStorage.getItem('coexistence-page-state')), [])

  useEffect(() => {
    if (stateFromLocalStorage) {
      setFormData(stateFromLocalStorage);
    }
  }, [stateFromLocalStorage, setFormData]);

  const saveFormChanges = useCallback(() => {
    localStorage.setItem('coexistence-page-state', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    saveFormChanges();
  }, [saveFormChanges]);

  const handleInputChange = useCallback((event, inputName) => {
    const updatedFormData = {
      ...formData,
      [inputName]: event.target.value,
    };
    setFormData(updatedFormData);
  }, [setFormData, formData]);

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="text-lg font-medium mb-4">Convivencia</div>
      
      <label className="block font-medium mb-2">Comportamiento escolar</label>
      <label className="block mb-1">Descripción</label>
      <input
        type="text"
        placeholder="Escribe una descripción..."
        className="form-input mb-2"
        value={formData.descriptionFour}
        onChange={(event) => handleInputChange(event, 'descriptionFour')}
      />
      <label className="block mb-1">Plan de acción</label>
      <input
        type="text"
        placeholder="Escribe el plan de acción..."
        className="form-input mb-4"
        value={formData.actionFour}
        onChange={(event) => handleInputChange(event, 'actionFour')}
      />
      
      <label className="block font-medium mb-2">Comportamiento en casa</label>
      <label className="block mb-1">Descripción</label>
      <input
        type="text"
        className="form-input mb-2"
        placeholder="Escribe una descripción..."
        value={formData.descriptionFive}
        onChange={(event) => handleInputChange(event, 'descriptionFive')}
      />
      <label className="block mb-1">Plan de acción</label>
      <input
        type="text"
        placeholder="Escribe el plan de acción..."
        className="form-input mb-4"
        value={formData.actionFive}
        onChange={(event) => handleInputChange(event, 'actionFive')}
      />
      
      <label className="block font-medium mb-2">Relaciones interpersonales</label>
      <label className="block mb-1">Descripción</label>
      <input
        type="text"
        className="form-input mb-2"
        placeholder="Escribe una descripción..."
        value={formData.descriptionSix}
        onChange={(event) => handleInputChange(event, 'descriptionSix')}
      />
      <label className="block mb-1">Plan de acción</label>
      <input
        type="text"
        placeholder="Escribe el plan de acción..."
        className="form-input mb-4"
        value={formData.actionSix}
        onChange={(event) => handleInputChange(event, 'actionSix')}
      />
      
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 mr-2"
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        Siguiente
      </button>
      <button
        className="bg-gray-300 text-gray-600 py-2 px-4 rounded hover:bg-gray-400"
        onClick={() => {
          setPage(page - 1);
          setX(-1000);
        }}
      >
        Anterior
      </button>
      
    </motion.div>
  );
};

export default Coexistence;
