import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function AddProfessional({ setOpenModal }) {
  const [professionals, setProfessionals] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [numberid, setNumberId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  useEffect(() => {
    axios
      .get("https://cire-backend.onrender.com/professional")
      .then((response) => {
        setProfessionals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://cire-backend.onrender.com/professional/', {
      name,
      age,
      numberid,
      occupation,
      phone,
      email,
      password,
    }).then(response => {
      setProfessionals([professionals, response.data.body]);
      setName("");
      setAge("");
      setOccupation("");
      setNumberId("");
      setPhone("");
      setEmail("");
      setPassword("");
        Swal.fire({title: "El profesional se agregó correctamente",
        icon: 'success'})
    }).catch(error => {
      console.error('Error updating profesional:', error);
                    Swal.fire({
                      title: 'Error al actualizar al profesional',
                      icon: 'error'
                    });

    });
}




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
                <input type="number" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={age}
                                    onChange={
                                        (e) => setAge(e.target.value)
                                    }/>
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Profesion:
                <input
                  type="text"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Numero de identificación:
                <input
                  type="number"
                  placeholder="Introduce el numero de identificación"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={numberid}
                  onChange={(e) => setNumberId(e.target.value)}
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Télefono del profesional:
                <input
                  type="number"
                  placeholder="Introduce un número de 10 dígitos"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Correo:
                <input
                  type="text"
                  placeholder="Introduce un @"
                  required 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                  
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Contraseña:
                <input
                  type="password"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded justify-items-center"
                type="submit"
              >
                {selectedVolunteer ? "Save changes" : "Agregar profesional"}
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
