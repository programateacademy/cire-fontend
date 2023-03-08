import React, { useState, useEffect } from "react";
import axios from "axios";

function FormExample() {
  const [datosFormulario, setDatosFormulario] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://localhost:3001/formOnee");
      const data = response.data;
      setDatosFormulario(data);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Formulario</h1>
      {datosFormulario.map((dato) => (
        <div key={dato.id} className="border border-gray-300 p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Información {dato.id}</h2>
          <ul>
            {dato.academico && (
              <li>
                <h3 className="font-bold mb-2">Información Académica</h3>
                <ul>
                  {dato.academico.class && (
                    <li className="mb-2">
                      <p>
                        <span className="font-bold">Descripción: </span>
                        {dato.academico.class.description}
                      </p>
                      <p>
                        <span className="font-bold">Plan de acción: </span>
                        {dato.academico.class.actionplan}
                      </p>
                    </li>
                  )}
                  {dato.academico.cire && (
                    <li className="mb-2">
                      <p>
                        <span className="font-bold">Descripción: </span>
                        {dato.academico.cire.description}
                      </p>
                      <p>
                        <span className="font-bold">Plan de acción: </span>
                        {dato.academico.cire.actionplan}
                      </p>
                    </li>
                  )}
                  {dato.academico.home && (
                    <li className="mb-2">
                      <p>
                        <span className="font-bold">Descripción: </span>
                        {dato.academico.cire.description}
                      </p>
                      <p>
                        <span className="font-bold">Plan de acción: </span>
                        {dato.academico.cire.actionplan}
                      </p>
                    </li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FormExample;