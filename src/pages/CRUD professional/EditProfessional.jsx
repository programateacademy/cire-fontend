import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'

export const EditProfessional = ({ setOpenModalEdit, professionalId }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [occupation, setOccupation] = useState("");
  const [numberid, setNumberId] = useState(0);
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get(`https://cire-backend.onrender.com/professional/${professionalId}`)
      .then((res) => {
        console.log(professionalId);
        console.log(res.data)
        const professional = res.data;
        setName(professional.name);
        setAge(professional.age);
        setOccupation(professional.occupation);
        setNumberId(professional.numberid);
        setPhone(professional.phone);
        setEmail(professional.email);
        setPassword(professional.password);
      });
  }, []);

  function editProfessionals() {
    let editprofessionals = {
      name: name,
      age: age,
      occupation: occupation,
      numberId: numberid,
      phone: phone,
      email: email,
      password: password,
    };

    Swal.fire({
      title: '¿Está seguro de que desea guardar los cambios?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
      .put(`https://cire-backend.onrender.com/professional/${professionalId}`, editprofessionals)
      .then((res) => {
        console.log(res.data.body);
        Swal.fire({
          title: 'Cambios guardados',
          icon: 'success'
        });
      })
      .catch((error) => {
        console.error('Error updating student:', error);
        Swal.fire({
          title: 'Error al actualizar al profesional',
          icon: 'error'
        });
      });
  }
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
                Cédula de ciudadania:
                <input
                  type="number"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={numberid}
                  onChange={(e) => setNumberId(e.target.value)}
                />
              </label>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Télefono del Profesional:
                <input
                  type="number"
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
                  required
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
