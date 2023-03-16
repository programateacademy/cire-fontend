
  import { motion } from "framer-motion";
  import { useEffect, useState } from 'react';
  import axios from 'axios'
  
  const Coexistence = ({ formData, setFormData, page, setPage, x, setX,saveFormData }) => {
    const [stateFromLocalStorage, setStateFromLocalStorage] = useState(null);
  
    // useEffect to load previous state on component mount
    useEffect(() => {
      const previousState = JSON.parse(localStorage.getItem('coexistence-page-state'));
      if (previousState) {
        setFormData(previousState);
        setStateFromLocalStorage(previousState);
      }

      fetchData()
    }, []);
     
    // useEffect to save state changes made by user
    useEffect(() => {
      localStorage.setItem('coexistence-page-state', JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
      axios
        .get('https://cire-backend.onrender.com/principalForm')
        .then((response) => {
          const coexistenceData = response.data.coexistence;
          setFormData((formData) => ({
            ...formData,
            descriptionFour: coexistenceData?.schoolBehavior?.description || '',
            actionFour: coexistenceData?.schoolBehavior?.actionPlan || '',
            descriptionFive: coexistenceData?.homeBehavior?.description || '',
            actionFive: coexistenceData?.homeBehavior?.actionPlan || '',
            descriptionSix: coexistenceData?.relationships?.description || '',
            actionSix: coexistenceData?.relationships?.actionPlan || '',
          }));
        });
    }, [setFormData]);
    
  
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Convivencia</div>
      <label>Comportamiento escolar</label>
      <label>Descripción</label>
      <input
          type="text"
          placeholder="Escribe una descripción..."
          className="form-group"
          value={formData.descriptionFour}
          onChange={(e) => setFormData({ ...formData, descriptionFour: e.target.value })}
        />
        <label>Plan de acción</label>
      <input
          type="text"
          placeholder="Escribe el plan de acción..."
          className="form-group"
          value={formData.actionFour}
          onChange={(e) => setFormData({ ...formData, actionFour: e.target.value })}
        />
        <label>comportamiento en casa</label>
        <label>Descripción</label>
        <input
          type="text"
          className="form-group"
          placeholder="Escribe una descripción..."
          value={formData.descriptionFive}
          onChange={(e) => setFormData({ ...formData, descriptionFive: e.target.value })}
        />
         <label>Plan de acción</label>
      <input
          type="text"
          placeholder="Escribe el plan de acción..."
          className="form-group"
          value={formData.actionFive}
          onChange={(e) => setFormData({ ...formData, actionFive: e.target.value })}
        />
        <label>relaciones interpersonales</label>
        <label>descripción</label>
        <input
          type="text"
          className="form-group"
          placeholder="Escribe una descripción..."
          value={formData.descriptionSix}
          onChange={(e) => setFormData({ ...formData, descriptionSix: e.target.value })}
        />
         <label>Plan de acción</label>
      <input
          type="text"
          placeholder="Escribe el plan de acción..."
          className="form-group"
          value={formData.actionSix}
          onChange={(e) => setFormData({ ...formData, actionSix: e.target.value })}
        />
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
    </motion.div>
  );
};

export default Coexistence;