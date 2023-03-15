import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const EditProfessional = ({ setOpenModalEdit, professionalId }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [numberid, setNumberId] = useState("");
  const [numbercell, setNumberCellphone] = useState("");
  const [mail, setMail] = useState("");
  const [pasword, setPasword] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/professionals/${professionalId}`)
      .then((res) => {
        console.log(professionalId);
        const professional = res.data;
        setName(professional.name);
        setAge(professional.age);
        setProfession(professional.profession);
        setNumberId(professional.numberid);
        setNumberCellphone(professional.numbercell);
        setMail(professional.mail);
        setPasword(professional.pasword);
      });
  }, []);

  function editProfessionals() {
    let editprofessionals = {
      name: name,
      age: age,
      profession: profession,
      numberId: numberid,
      numberCellphone: numbercell,
      mail: mail,
      pasword: pasword,
    };

    axios
      .put(`http://localhost:3000/professionals/${professionalId}`, editprofessionals)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-indigo-100">
        <div className="p-20">
          <div className="grid gap-6 mb-6 lg:grid-cols-1">
            <button
              className="text-dark"
              onClick={() => setOpenModalEdit(false)}
            >
              X
            </button>
            <form>
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Nombre:
                <input
                  type="text"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Edad:
                <input
                  type="text"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Profesion:
                <input
                  type="text"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Cédula de ciudadania:
                <input
                  type="text"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={numberid}
                  onChange={(e) => setNumberId(e.target.value)}
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Télefono del Profesional:
                <input
                  type="text"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={numbercell}
                  onChange={(e) => setNumberCellphone(e.target.value)}
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Correo:
                <input
                  type="text"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Contraseña:
                <input
                  type="text"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={pasword}
                  onChange={(e) => setPasword(e.target.value)}
                />
              </label>
            </form>
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded justify-items-center"
            onClick={editProfessionals}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
