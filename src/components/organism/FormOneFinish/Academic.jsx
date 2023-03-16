import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from 'axios';

function Academic({ x, setX, page, setPage }) {
  const [formData, setFormData] = useState({
    academic: {
      workInClasses: {
        description: '',
        action: '',
      },
      worksInCire: {
        description: '',
        actionPlan: '',
      },
      workAtHome: {
        description: '',
        actionPlan: '',
      },
    },
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  useEffect(() => {
    axios.get('https://cire-backend.onrender.com/principalForm').then((response) => {
      const data = response.data;
      setFormData((formData) => ({
        ...formData,
        academic: {
          workInClasses: {
            description: data?.academic?.workInClasses?.description || '',
            action: data?.academic?.workInClasses?.action || '',
          },
          worksInCire: {
            description: data?.academic?.worksInCire?.description || '',
            actionPlan: data?.academic?.worksInCire?.actionPlan || '',
          },
          workAtHome: {
            description: data?.academic?.workAtHome?.description || '',
            actionPlan: data?.academic?.workAtHome?.actionPlan || '',
          },
        },
      }));
    });
  }, [setFormData]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      academic: {
        ...formData.academic,
        [name]: {
          ...formData.academic[name],
          [name.split('.').pop()]: value,
        },
      },
    });

    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const handleSubmit = () => {
    console.log("Enviando datos al Backend...")

    // Enviamos los datos al backend utilizando axios
    axios.post('https://cire-backend.onrender.com/principalForm', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Guardamos los datos en localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div>
        <div className="text-2xl font-bold mb-4">Académico</div>
        <label className="block mb-2"> Trabajo en clase</label>
        <label className="block mb-2">Descripción</label>
        <input
          type="text"
          name="academic.workInClasses.description"
          placeholder="Escribe una descripción"
          value={formData.academic.workInClasses.description}
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded mb-4 w-full"
        />
        <label className="block mb-2">Plan de acción</label>
        <input
          type="text"
          name="academic.workInClasses.action"
          placeholder="Escribe el plan"
          value={formData.academic.workInClasses.action}
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded mb-4 w-full"
          />

  <label className="block mb-2"> Trabajo en ciré</label>
  <label className="block mb-2">Descripción</label>
  <input
    type="text"
    name="academic.worksInCire.description"
    placeholder="Escribe una descripción"
    value={formData.academic.worksInCire.description}
    onChange={handleChange}
    className="border border-gray-400 p-2 rounded mb-4 w-full"
  />
  <label className="block mb-2">Plan Plan de acción</label>
  <input
    type="text"
    name="academic.worksInCire.action"
    placeholder="Escribe el plan de acción"
    value={formData.academic.worksInCire.action}
    onChange={handleChange}
    className="border border-gray-400 p-2 rounded mb-4 w-full"
  />
  
  <label className="block mb-2"> Trabajo en casa</label>
  <label className="block mb-2">Descripción</label>
  <input
    type="text"
    name="academic.workAtHome.description"
    placeholder="Escribe una descripción"
    value={formData.academic.workAtHome.description}
    onChange={handleChange}
    className="border border-gray-400 p-2 rounded mb-4 w-full"
  />
  <label className="block mb-2">Plan de acción</label>
  <input
    type="text"
    name="academic.workAtHome.actionPlan"
    placeholder="Escribe el plan de acción"
    value={formData.academic.workAtHome.actionPlan}
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
    </div>
      <br />
    </motion.div>
  );
};

export default Academic;