import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import axios from 'axios'

const Coexistence = ({ page, setPage, x, setX }) => {
  const [coexistenceData, setCoexistenceData] = useState({
    schoolBehavior: {
      description: '',
      actionPlan: ''
    },
    behaviorAtHome: {
      description: '',
      actionPlan: ''
    },
    relationships: {
      description: '',
      actionPlan: ''
    }
  });

  // useEffect to load data from API on component mount
  useEffect(() => {
    axios
      .get('https://cire-backend.onrender.com/principalForm')
      .then((response) => {
        const apiCoexistenceData = response.data.coexistence;
        setCoexistenceData(apiCoexistenceData);
      });
  }, []);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setCoexistenceData({
  //     ...coexistenceData,
  //     [name]: {
  //       ...coexistenceData[name],
  //       [name.split('.').pop()]: value
  //     }
  //   });
  // };

  const handleSubmit = () => {
    axios
      .post('https://cire-backend.onrender.com/principalForm', {
        coexistence: coexistenceData
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    const propertyPath = name.split('.');
    if (coexistenceData.hasOwnProperty(propertyPath[0]) &&
        coexistenceData[propertyPath[0]].hasOwnProperty(propertyPath[1])) {
  
      setCoexistenceData({
        ...coexistenceData,
        [propertyPath[0]]: {
          ...coexistenceData[propertyPath[0]],
          [propertyPath[1]]: value
        }
      });
    }
  };

  return (
    <motion.div initial={{ x }} animate={{ x: 0 }} exit={{ x }}>
      {Object.keys(coexistenceData).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <label>Descripción</label>
          <input
            type="text"
            className="form-group"
            placeholder="Escribe una descripción..."
            name={`${key}.description`}
            value={coexistenceData[key].description}
            onChange={handleChange}
          />
          <label>Plan de acción</label>
          <input
            type="text"
            placeholder="Escribe el plan de acción..."
            className="form-group"
            name={`${key}.actionPlan`}
            value={coexistenceData[key].actionPlan}
            onChange={handleChange}
          />
        </div>
      ))}
  
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

      <button onClick={handleSubmit}>
        Submit
      </button>
    </motion.div>
  );
};

export default Coexistence;
