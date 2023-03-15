import { motion } from "framer-motion";
import React, { useEffect, useCallback } from "react";

const Support = ({ formData, setFormData, page, setPage, x, setX, onSaveFormData }) => {
  const handleSaveData = (event) => {
    event.preventDefault();
    onSaveFormData(formData); //Llamar a la función pasada como prop
    setPage(2);
  };

  const saveFormData = useCallback(() => {
    localStorage.setItem("formulario", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formulario")) ?? {};

    if (JSON.stringify(savedData) !== JSON.stringify(formData)) {
      setFormData(savedData);
    }

    return () => {
      saveFormData();
    };
  }, [setFormData, formData, saveFormData]);

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div class="text-3xl font-bold mb-4">Apoyo familiar</div>
      <label class="block font-medium text-sm mb-2">Pautas de crianza</label>
      <label class="block text-gray-700 text-sm mb-2">Descripción</label>
      <input
          type="text"
          placeholder="Occupation"
          class="form-input w-full border rounded py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.descriptionSeven}
          onChange={(e) => setFormData({ ...formData, descriptionSeven: e.target.value })}
      />
      
      <label class="block text-gray-700 text-sm mb-2">Plan de acción</label>
      <input
          type="text"
          placeholder="Escribe un plan de acción"
          class="form-input w-full border rounded py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.actionSeven}
          onChange={(e) => setFormData({ ...formData, actionSeven: e.target.value })}
      />
      
      <label class="block font-medium text-sm mb-2">Acompañamiento</label>
      <label class="block text-gray-700 text-sm mb-2">Descripción</label>
      <input
          type="text"
          placeholder="About"
          class="form-input w-full border rounded py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.descriptionEight}
          onChange={(e) => setFormData({ ...formData, descriptionEight: e.target.value })}
      />
      
      <label class="block text-gray-700 text-sm mb-2">Plan de acción</label>
      <input
          type="text"
          placeholder="Escribe un plan de acción"
          class="form-input w-full border rounded py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.actionEight}
          onChange={(e) => setFormData({ ...formData, actionEight: e.target.value })}
      />
      
      <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
          onClick={handleSaveData}>
          Enviar
      </button>
      
      <button
          class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
              setPage(page - 1);
              setX(-1000);
          }}>
          Previous
      </button>
      
    </motion.div>
  );
};

export default Support;
