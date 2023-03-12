import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export const EditStudent = () => {

  const params = useParams()
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [representative, setRepresentative] = useState('');
  const [gender, setGender] = useState('');
  const [numberCellphone, setNumberCellphone] = useState('')

  const id = params.id

  useEffect(() => {
    axios.get(`http://localhost:3000/students/${id}`).then(res => {
        const student = res.data
        setName(student.name);
        setAge(student.age);
        setRepresentative(student.representative);
        setGender(student.gender);
        setNumberCellphone(student.numberCellphone); 
    })
  }, [id])


  function editStudents(){

    var editstudents = {
  
      name: name,
      age: age,
      representative: representative,
      gender: gender,
      numberCellphone: numberCellphone,
      id: id
    
    }
  
    axios.put(`http://localhost:3000/students/${id}`, editstudents)
      .then(res => {
        console.log(res.data)
        alert(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }



  return (
    <div className='bg-indigo-100 w-screen'>
   <div className='max-w-2xl mx-auto p-16'>
      <div className='grid gap-6 mb-6 lg:grid-cols-1'>
      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Nombre completo:
          <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Edad:
          <input type="number" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>

        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Representante:
          <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={representative} onChange={(e) => setRepresentative(e.target.value)} />
        </label>

        <label htmlFor='gender' className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"> Género:
          <select
           id="gender"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
             <option value="">Selecciona una opción</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              </select>
          </label>

        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Télefono del representante:
          <input type="text" pattern="[0-9]{10}" minlength="10" maxlength="10" placeholder="Introduce un número de 10 dígitos" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={numberCellphone} onChange={(e) => setNumberCellphone(e.target.value)} />
        </label>

       
      </div>
      <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded justify-items-center' onClick={editStudents}>Enviar</button>


   </div>
        
    </div>
  );
  
}
