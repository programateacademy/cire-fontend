import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const FormStudentPartThree = () => {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [description, setDescription] = useState("");
  const [actionplan, setActionplan] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/formOnee")
      .then((response) => {
        setForms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedForm) {
      axios
        .put(`http://localhost:3001/formOnee/${selectedForm.id}`, {
          academico: {
            class: {
              description,
              actionplan,
            },
            cire: {
              description,
              actionplan,
            },
            home: {
              description,
              actionplan,
            },
          },
          convivencia: {
            school: {
              description,
              actionplan,
            },
            home: {
              description,
              actionplan,
            },
            relationships: {
              description,
              actionplan,
            },
          },
          apoyo: {
            guidelines: {
              description,
              actionplan,
            },
            accompaniment: {
              description,
              actionplan,
            },
          },
        })
        .then((response) => {
          const updatedForms = forms.map((form) => {
            if (form.id === response.data.id) {
              return response.data;
            }
            return form;
          });
          setForms(updatedForms);
          setSelectedForm(null);
          setDescription("");
          setActionplan("");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("http://localhost:3001/formOnee", {
          academico: {
            class: {
              description,
              actionplan,
            },
            cire: {
              description,
              actionplan,
            },
            home: {
              description,
              actionplan,
            },
          },
          convivencia: {
            school: {
              description,
              actionplan,
            },
            home: {
              description,
              actionplan,
            },
            relationships: {
              description,
              actionplan,
            },
          },
          apoyo: {
            guidelines: {
              description,
              actionplan,
            },
            accompaniment: {
              description,
              actionplan,
            },
          },
        })
        .then((response) => {
          setForms([...forms, response.data]);
          setDescription("");
          setActionplan("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/formOnee/${id}`)
      .then((response) => {
        setForms(forms.filter((form) => form.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (form) => {
    setSelectedForm(form);
    setDescription(form.description);
    setActionplan(form.actionplan);
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex items-right justify-end ">
        <div className="flex flex-col mb-5">
          <h2 className="text-base font-semibold leading-6 text-green">
            Nombre:Fulanito perez
          </h2>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="block text-sm font-medium leading-5 text-gray-900"
          >
            Edad:
          </label>
          <select
            id=""
            name=""
            autoComplete=""
            className="text-center block w-20 rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto mt-4 p-4">
        <h1 className="text-2xl font-bold mb-4">
          Formulario de no recuerdo el nombre{" "}
        </h1>
        {forms.map((item) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Aquí va la sección de cada formulario */}
            {/* <h2 className="text-lg font-bold mb-2">{`Formulario ${item.id}`}</h2> */}
            {/* Sección Académico */}
            {item.apoyo && (
              <div className="border p-4 rounded-lg mb-4">
                <h3
                  className="text-md  mb-2 text-rey font-bold"
                  style={{ textAlign: "center", fontSize: "30px" }}
                >
                  Apoyo Familiar
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center">
                    <h3
                      className="text-base font-bold leading-2 text-gray-500 text-center py-8 "
                      style={{ fontSize: "22px" }}
                    >
                      Trabaja en clases
                    </h3>
                  </div>
                  {item.apoyo.guidelines && (
                    <div div className="col-span-5 sm:col-span-5 ">
                      <label
                        htmlFor={`guidelines-${item.id}`}
                        className="text-green font-semibold"
                      >
                        Descripción:
                      </label>
                      <input
                        type="text"
                        id={`guidelines-${item.id}`}
                        value={item.apoyo.guidelines.description}
                        className="border p-2 rounded-md w-full h-20 "
                      />

                      <label
                        htmlFor={`apoyo-actionplan-${item.id}`}
                        className="text-green font-semibold"
                      >
                        Plan de acción:
                      </label>
                      <input
                        type="text"
                        id={`apoyo-actionplan-${item.id}`}
                        value={item.apoyo.guidelines.actionplan}
                        className="border p-2 rounded-md w-full h-20"
                      />
                    </div>
                  )}
                  {item.apoyo.accompaniment && (
                    <div className="col-span-1 sm:col-span-5 ">
                      <div className="px-4 py-8 sm:px-0">
                        <h3
                          className="text-base font-bold leading-6 text-gray-900 text-center"
                          style={{ fontSize: "22px" }}
                        >
                          Trabaja en CIRÉ
                        </h3>
                      </div>
                      <label
                        htmlFor={`accompaniment-${item.id}`}
                        className="text-green font-semibold"
                      >
                        Descripción:
                      </label>
                      <input
                        type="text"
                        id={`accompaniment-${item.id}`}
                        value={item.apoyo.accompaniment.description}
                        className="border p-2 rounded-md w-full h-20"
                      />
                      <label
                        htmlFor={`accompaniment-actionplan-${item.id}`}
                        className="text-green font-semibold"
                      >
                        Plan de acción:
                      </label>
                      <input
                        type="text"
                        id={`accompaniment-actionplan-${item.id}`}
                        value={item.apoyo.accompaniment.actionplan}
                        className="border p-2 rounded-md w-full h-20 "
                      />
                    </div>
                  )}
                  
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-8">
                  <a
                    href="#works"
                    className="inline-block px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md border-2 border-green-600"
                  >
                    Editar
                  </a>
                  <a
                    href="#works"
                    className="inline-block px-8 py-3 border bg-green border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
                    style={{ color: "white" }}
                  >
                   Guardar
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};