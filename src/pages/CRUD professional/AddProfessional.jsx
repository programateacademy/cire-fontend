import React, { useState, useEffect } from "react";
import axios from "axios";

function AddProfessional({ setOpenModal }) {
  const [professionals, setProfessionals] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [numberid, setNumberId] = useState("");
  const [numbercell, setNumberCellphone] = useState("");
  const [mail, setMail] = useState("");
  const [pasword, setPasword] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Professionals")
      .then((response) => {
        setProfessionals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedVolunteer) {
      axios
        .put(`http://localhost:3000/Professionals/${selectedVolunteer.id}`, {
          name,
          age,
          year,
          numberid,
          profession,
          numbercell,
          mail,
          pasword,
        })
        .then((response) => {
          const updatedProfessional = professionals.map((professional) => {
            if (professional.id === response.data.id) {
              return response.data;
            }
            return professional;
          });
          setProfessionals(updatedProfessional);
          setSelectedVolunteer(null);
          setName("");
          setAge("");
          setProfession("");
          setNumberId("");
          setNumberCellphone("");
          setMail("");
          setPasword("");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("http://localhost:3000/Professionals", {
          name,
          age,
          numberid,
          profession,
          numbercell,
          mail,
          pasword,
        })
        .then((response) => {
          setProfessionals([...professionals, response.data]);
          setName("");
          setAge("");
          setProfession("");
          setNumberId("");
          setNumberCellphone("");
          setMail("");
          setPasword("");
          alert("El nuevo profesional ha sido agregado.");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-indigo-100">
        <div className="p-20">
          <div className="grid gap-6 mb-6 lg:grid-cols-1">
            <form onSubmit={handleSubmit}>
              <button className="text-dark" onClick={() => setOpenModal(false)}>
                X
              </button>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Nombre completo:
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
                Cedula de ciudadania:
                <input
                  type="text"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={numberid}
                  onChange={(e) => setNumberId(e.target.value)}
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Télefono del profesional:
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

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded justify-items-center"
                type="submit"
              >
                {selectedVolunteer ? "Save changes" : "Agregar estudiante"}
              </button>
              <button
                className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded justify-items-center"
                onClick={() => setOpenModal(false)}
              >
                cancel{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProfessional;
