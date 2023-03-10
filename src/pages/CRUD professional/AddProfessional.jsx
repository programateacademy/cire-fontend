import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddProfessional() {
  const [Professionals, setProfessionals] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [numberid, setNumberId] = useState('');
  const [numbercell, setNumberCellphone] = useState('');
  const [mail, setMail] = useState('');
  const [pasword, setPasword] = useState('');
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/Professionals')
      .then(response => {
        setProfessionals(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedVolunteer) {
      axios.put(`http://localhost:3001/Professionals/${selectedVolunteer.id}`, { name, age, year, numberid, profession, numbercell, mail, pasword })
        .then(response => {
          const updatedProfessional = Professionals.map(Professional => {
            if (Professional.id === response.data.id) {
              return response.data;
            }
            return Professional;
          });
          setProfessionals(updatedProfessional);
          setSelectedVolunteer(null);
          setName('');
          setAge('');
          setProfession('');
          setNumberId('');
          setNumberCellphone('');
          setMail('');
          setPasword('');
        
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios.post('http://localhost:3001/Professionals', { name, age, numberid, profession, numbercell, mail, pasword })
        .then(response => {
          setProfessionals([...Professionals, response.data]);
          setName('');
          setAge('');
          setProfession('');
          setNumberId('');
          setNumberCellphone('');
          setMail('');
          setPasword('');

        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/Professionals/${id}`)
      .then(response => {
        setProfessionals(Professionals.filter(Professional => Professional.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEdit = (Professional) => {
    setSelectedVolunteer(Professional);
    setName(Professional.name);
    setAge(Professional.age);
    setProfession(Professional.profession);
    setNumberId(Professional.numberid);
    setNumberCellphone(Professional.numbercell);
    setMail(Professional.mail);
    setPasword(Professional.pasword);
  };

  return (
    <div className='bg-indigo-100 w-screen'>

    <div className='max-w-2xl mx-auto p-16'>
          <div className='grid gap-6 mb-6 lg:grid-cols-1'>
          <form onSubmit={handleSubmit}>
    
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Nombre completo:
              <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={name} onChange={(e) => setName(e.target.value)} />
            </label >
    
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Edad:
              <input type="text" required  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Profesion:
              <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={profession} onChange={(e) => setProfession(e.target.value)} />
            </label>
    
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Cedula de ciudadania:
              <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={numberid} onChange={(e) => setNumberId(e.target.value)} />
            </label>
    
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Télefono del profesional:
              <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={numbercell} onChange={(e) => setNumberCellphone(e.target.value)} />
            </label>

            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Correo:
              <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={mail} onChange={(e) => setMail(e.target.value)} />
            </label>

            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
              Contraseña:
              <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pasword} onChange={(e) => setPasword(e.target.value)} />
            </label>
    
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded justify-items-center' type="submit">{selectedVolunteer ? 'Save changes' : 'Agregar estudiante'}</button>
            {selectedVolunteer && (
              <button type="button" onClick={() => setSelectedVolunteer(null)}>Cancel</button>
            )}
          </form>
        </div>
    
        </div>
    
        </div>
  );
}

export default AddProfessional;
