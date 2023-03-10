import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddStudent() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [representative, setRepresentative] = useState('');
  const [gender, setGender] = useState('');
  const [numberCellphone, setNumberCellphone] = useState('');
  const [selectedChild, setSelectedChild] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedChild) {
      axios.put(`http://localhost:3001/students/${selectedChild.id}`, { name, age, year, gender, representative, numberCellphone  })
        .then(response => {
          const updatedStudent = students.map(student => {
            if (student.id === response.data.id) {
              return response.data;
            }
            return student;
          });
          setStudents(updatedStudent);
          setSelectedChild(null);
          setName('');
          setAge('');
          setRepresentative('');
          setGender('');
          setNumberCellphone('');
        
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios.post('http://localhost:3001/students', { name, age, gender, representative, numberCellphone })
        .then(response => {
          setStudents([...students, response.data]);
          setName('');
          setAge('');
          setRepresentative('');
          setGender('');
          setNumberCellphone('');
        })
        .catch(error => {
          console.log(error);
        });
    }
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
          <input type="number" required  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        
        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Representante:
          <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={representative} onChange={(e) => setRepresentative(e.target.value)} />
        </label>

        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Género:
          <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>

        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Télefono del representante:
          <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={numberCellphone} onChange={(e) => setNumberCellphone(e.target.value)} />
        </label>

        <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded justify-items-center' type="submit">{selectedChild ? 'Save changes' : 'Agregar estudiante'}</button>
        {selectedChild && (
          <button type="button" onClick={() => setSelectedChild(null)}>Cancel</button>
        )}
      </form>
    </div>

    </div>

    </div>
  );
}

export default AddStudent;
