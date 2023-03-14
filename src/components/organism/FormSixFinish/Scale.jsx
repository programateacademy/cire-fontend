import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Cognoscitivo = ({ formData, x, setX }) => {
  const [formValues, setFormValues] = useState(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    return (
      savedFormData || {
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
        question10: "",
        question11: "",
        question12: "",
        question13: "",
        question14: "",
        question15: "",
        question16: "",
        question17: "",
        question18: "",
      }
    );
  });

  useEffect(() => {
    const isInitialRender = !localStorage.getItem("hasVisited");
    if (isInitialRender) {
      localStorage.setItem("formData", JSON.stringify(formValues));
      localStorage.setItem("hasVisited", true);
      console.log(
        `formData en local storage: ${localStorage.getItem("formData")}`
      );
    }
  }, []);

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData && !isEqual(savedFormData, formValues)) {
      setFormValues(savedFormData);
    }
  }, []);

  const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formValues));
    alert("You've successfully submitted this form");
  };

  return (
    <motion.div
      initial={{ y: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">La Escala de Balance Afectivo</div>
      <h1>1. poco o nunca</h1>
      <h1>A veces</h1>
      <h1>Generalmente o Mucho</h1>
      <form onSubmit={handleFormSubmit}>
        <label>¿Se ha sentido molestado por alguien?</label>
        <select
          name="question1"
          value={formValues.question1}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido muy solo o distante de la gente?</label>
        <select
          name="question2"
          value={formValues.question2}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Ha sentido que las cosas iban como usted quería?</label>
        <select
          name="question3"
          value={formValues.question3}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido muy preocupado?</label>
        <select
          name="question4"
          value={formValues.question4}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido contento por tener buenos amigos o amigas?</label>
        <select
          name="question5"
          value={formValues.question5}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Ha tenido mieod de lo que pudiera suceder?</label>
        <select
          name="question6"
          value={formValues.question6}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>
          ¿Se ha sentido particularmente estimulado o interesado por algo?
        </label>
        <select
          name="question7"
          value={formValues.question7}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido deprimido o muy infeliz?</label>
        <select
          name="question8"
          value={formValues.question8}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido lleno de energía?</label>
        <select
          name="question9"
          value={formValues.question9}
          onChange={handleInputChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido muy cansado? </label>
        <select
          name="question10"
          value={formValues.question10}
          onChange={handleInputChange}
        >
        <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>
          ¿Se ha sentido muy inquieto que no podia permanecer sentado en una
          silla?{" "}
        </label>
        <select
          name="question11"
          value={formValues.question11}
          onChange={handleInputChange}
        >
        <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Ha sentido que se estaba diviertiendo mucho? </label>
        <select
          name="question12"
          value={formValues.question12}
          onChange={handleInputChange}
        >
        <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido muy alegre o feliz? </label>
        <select
          name="question13"
          value={formValues.question13}
          onChange={handleInputChange}
        >
        <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido con ganas de llorar? </label>
        <select
          name="question14"
          value={formValues.question14}
          onChange={handleInputChange}
        >
        <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido eufórico?</label>
        <select
          name="question15"
          value={formValues.question15}
          onChange={handleInputChange}
        >
        <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido seguro respecto al futuro? ?</label>
        <select
          name="question16"
          value={formValues.question16}
          onChange={handleInputChange}
        >
        <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>¿Se ha sentido aburrido?</label>
        <select
          name="question17"
          value={formValues.question17}
          onChange={handleInputChange}
        >
        <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label>
          ¿Se ha sentido contento o satisfecho por haber logrado algo?
        </label>
        <select
          name="question18"
          value={formValues.question18}
          onChange={handleInputChange}
        >
        <option value="">Seleccione una opción</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </motion.div>
  );
};
export default Cognoscitivo;
