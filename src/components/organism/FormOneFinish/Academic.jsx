import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";

const Academic = ({ formData , setFormData, page, setPage, x, setX }) => {
  const formDataRef = useRef(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    formDataRef.current = {
      ...formDataRef.current,
      [name]: value,
    };
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("academicFormData"));
    if (savedData) {
      setFormData(savedData);
      formDataRef.current = savedData;
    }
  }, [setFormData]);

  // useEffect(() => {
  //   // 
  //   localStorage.setItem("academicFormData", JSON.stringify(formDataRef.current));
  // }, [formDataRef]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("academicFormData"));
  
    if (savedData) {
      setFormData(savedData);
    }
  
    const handleBeforeUnload = () => {
      localStorage.setItem("academicFormData", JSON.stringify(formData));
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [formData, setFormData]);
  


  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
    <div className="text-2xl font-bold mb-4">Académico</div>
    <label className="block mb-2"> Trabajo en clase</label>
    <label className="block mb-2">Descripción</label>
    <input
      type="text"
      name="descriptionOne"
      placeholder="Escribe una descripción"
      value={formDataRef.current.descriptionOne}
      onChange={handleChange}
      className="border border-gray-400 p-2 rounded mb-4 w-full"
    />
    <label className="block mb-2">Plan de acción</label>
    <input
      type="text"
      name="actionOne"
      placeholder="Escribe el plan de acción"
      value={formDataRef.current.actionOne}
      onChange={handleChange}
      className="border border-gray-400 p-2 rounded mb-4 w-full"
    />
    <label className="block mb-2"> Trabajo en ciré</label>
    <label className="block mb-2">Descripción</label>
    <input
      type="text"
      name="descriptionTwo"
      placeholder="Escribe una descripción"
      value={formDataRef.current.descriptionTwo}
      onChange={handleChange}
      className="border border-gray-400 p-2 rounded mb-4 w-full"
    />
    <label className="block mb-2">Plan de acción</label>
    <input
      type="text"
      name="actionTwo"
      placeholder="Escribe el plan de acción"
      value={formDataRef.current.actionTwo}
      onChange={handleChange}
      className="border border-gray-400 p-2 rounded mb-4 w-full"
    />
    <label className="block mb-2"> Trabajo en casa</label>
    <label className="block mb-2">Descripción</label>
    <input
      type="text"
      name="descriptionThree"
      placeholder="Escribe una descripción"
      value={formDataRef.current.descriptionThree}
      onChange={handleChange}
      className="border border-gray-400 p-2 rounded mb-4 w-full"
    />
    <label className="block mb-2">Plan de acción</label>
    <input
      type="text"
      name="actionThree"
      placeholder="Escribe el plan de acción"
      value={formDataRef.current.actionThree}
      onChange={handleChange}
      className="border border-gray-400 p-2 rounded mb-4 w-full"
    />
    <button
      onClick={() => {
        setPage(page + 1);
        setX(1000);
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Next
    </button>
    
      <br />
    </motion.div>
  );
};

export default Academic;
