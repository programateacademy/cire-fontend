import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export const EditProfessional = () => {

const params = useParams()
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [numberid, setNumberId] = useState('');
  const [numbercell, setNumberCellphone] = useState('');
  const [mail, setMail] = useState('');
  const [pasword, setPasword] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/professionals/', {id: params.id}).then(res => {
        console.log(res.data[0]) 
        const Professional = res.data[0]
        setName(Professional.name);
        setAge(Professional.age);
        setProfession(Professional.profession);
        setNumberId(Professional.numberid);
        setNumberCellphone(Professional.numbercell); 
        setMail(Professional.mail);
        setPasword(Professional.pasword); 

  
    })
  }, [])

  function ediProfessionals(){

    var editProfessionals = {
  
      name: name,
      age: age,
      Profession: profession,
      NumberId: numberid,
      numberCellphone: numbercell,
      Mail: mail,
      Pasword: pasword,
      id: params.id

    
    }
  
  console.log(ediProfessionals)
  
    axios.put('http://localhost:3001/', editProfessionals)
    .then(res => {
      console.log(res.data)
      alert(res.data)
    })
    .then(err => {
      console.log(err)
    })
  
  
  
  }




  return (
        <div className='bg-indigo-100 w-screen'>
        <div className='max-w-2xl mx-auto p-16'>
            <div className='grid gap-6 mb-6 lg:grid-cols-1'>
        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Nombre:
          <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={name} onChange={(e) => setName(e.target.value)} />    
        </label>
        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Edad:
          <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Profesion:
          <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={profession} onChange={(e) => setProfession(e.target.value)} />
        </label>

        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Cédula de ciudadania:
          <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={numberid} onChange={(e) => setNumberId(e.target.value)} />
        </label>

        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
          Télefono del Profesional:
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

         </div>

        <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded justify-items-center' onClick={ediProfessionals}>Enviar</button>
    </div>
    </div>
  );
  
}
