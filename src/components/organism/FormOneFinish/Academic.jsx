import { motion } from "framer-motion";
import { useState } from "react";
import axios from 'axios';

function Academic({ x, setX, page, setPage }) {
  const [academicData, setAcademicData] = useState({
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
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAcademicData({
      ...academicData,
      [name]: {
        ...academicData[name],
        [name.split('.').pop()]: value
      }
    });
  };

  const handleSubmit = () => {
    axios.post('https://cire-backend.onrender.com/principalForm', { academic: academicData })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

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
          name="workInClasses.description"
          placeholder="Escribe una descripción"
          value={academicData.workInClasses.description}
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded mb-4 w-full"
        />
        <label className="block mb-2">Plan de acción</label>
        <input
          type="text"
          name="workInClasses.action"
          placeholder="Escribe el plan"
          value={academicData.workInClasses.action}
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded mb-4 w-full"
        />

        <label className="block mb-2"> Trabajo en ciré</label>
        <label className="block mb-2">Descripción</label>
        <input
          type="text"
          name="worksInCire.description"
          placeholder="Escribe una descripción"
          value={academicData.worksInCire.description}
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded mb-4 w-full"
        />
        <label className="block mb-2">Plan Plan de acción</label>
        <input
          type="text"
          name="worksInCire.actionPlan"
          placeholder="Escribe el plan de acción"
          value={academicData.worksInCire.actionPlan}
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded mb-4 w-full"
        />

        <label className="block mb-2"> Trabajo en casa</label>
        <label className="block mb-2">Descripción</label>
        <input
          type="text"
          name="workAtHome.description"
          placeholder="Escribe una descripción"
          value={academicData.workAtHome.description}
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded mb-4 w-full"
        />
        <label className="block mb-2">Plan de acción</label>
        <input
          type="text"
          name="workAtHome.actionPlan"
          placeholder="Escribe el plan de acción"
          value={academicData.workAtHome.actionPlan}
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
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Save
        </button>
      </div>
      <br />
    </motion.div>
  );
};

export default Academic;
