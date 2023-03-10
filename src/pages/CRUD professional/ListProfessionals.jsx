import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/organism/NavbarAdmin';

export const ListProfessionals = () => {
  
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
    axios.get('http://localhost:3001/professionals')
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
      axios.put(`http://localhost:3001/professionals${selectedVolunteer.id}`, { name, age, profession, numberid, numbercell, mail, pasword })
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
      axios.post('http://localhost:3001/professionals', { name, age, numberid, profession, numbercell, mail, pasword })
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
    axios.delete(`http://localhost:3001/professionals${id}`)
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
  
  const listprofessional = Professionals.map(Professional => {
    return(
      <div className='container' key={Professionals.id}>
      <div className='row'>
        <div className='columna-lista'>
        <ul className='list-group'>
          <li className='list-group-item-title' >{Professionals.name}</li>
          <li className='list-group-item'>{Professionals.age}</li>
          <li className='list-group-item'>{Professionals.profession}</li>
          <li className='list-group-item'>{Professionals.numberid}</li>
          <li className='list-group-item'>{Professionals.numbercell}</li>
          <li className='list-group-item'>{Professionals.mail}</li>
          <li className='list-group-item'>{Professionals.pasword}</li>
    
        </ul>
    
        </div>
      </div>
    </div>
    )
  })
    return (



      
       <div className='bg-indigo-100 h-screen'>
        <Navbar />

       <button className=" ml-5 bg-lime-700 text-white px-4 rounded mt-5 mb-5"><a href="addProfessional">Agregar nuevo profesional</a></button>


         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-center'>
          {Professionals.map(Professional => (
        <div className=' bg-white rounded-lg w-96'>

<ul>  
                  <br />
                  <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Información básica</h2>
                  <br />
                  <li>Nombre: {Professional.name}</li>
                  <li>Edad: {Professional.age}</li>
                  <li>Profesión: {Professional.profession}</li>
                  <li>Cedula de ciudadania: {Professional.numberid}</li>
                  <li>Celular del profesional: {Professional.numbercell}</li>
                  <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Cuenta para ingreso a la plataforma</h2>
                  <li>Correo: {Professional.mail}</li>
                  <li>Contraseña: {Professional.pasword}</li>
                  <div className='grid grid-rows-1 grid-flow-col gap-6 px-32 m-14 justify-center'>
                  <Link className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to={`/editProfessionals/${Professional.id}`}>Editar</Link>
                  <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleDelete(Professional.id)}>Delete</button>
                  </div>

                 

                </ul>
        </div>
          ))}
       
      </div>
       </div>
  )
}


