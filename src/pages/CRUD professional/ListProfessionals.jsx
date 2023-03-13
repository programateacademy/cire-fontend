import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AddProfessional from './AddProfessional';
import { EditProfessional } from './EditProfessional';
import Swal from 'sweetalert2/dist/sweetalert2.js'




export const ListProfessionals = () => {

  const [professionals, setProfessionals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/professionals')
      .then(response => {
        setProfessionals(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/Professionals/${id}`)
      .then(response => {
        setProfessionals(professionals.filter(professional => professional.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const [openModal, setOpenModal] = useState(false);

  function closeModal() {
    setOpenModal(false);
  }

  const [openModalEdit, setOpenModalEdit] = useState(false);

  function closeModalEdit() {
    setOpenModalEdit(false);
  }

  const filteredProfessionals = professionals.filter(professional => {
    return professional.name.toLowerCase().includes(searchTerm.toLowerCase());
});

  const listmovies = filteredProfessionals.map(professionals=> {
    return(
      <div className='container' key={professionals.id}>
      <div className='row'>
        <div className='columna-lista'>
        <ul className='list-group'>
          <li className='list-group-item-title' >{professionals.name}</li>
          <li className='list-group-item'>{professionals.age}</li>
          <li className='list-group-item'>{professionals.profession}</li>
          <li className='list-group-item'>{professionals.numberid}</li>
          <li className='list-group-item'>{professionals.numbercell}</li>
          <li className='list-group-item'>{professionals.mail}</li>
          <li className='list-group-item'>{professionals.pasword}</li>
    
        </ul>
    
        </div>
      </div>
    </div>
    )
  })
    return (

       <div className='bg-indigo-100 h-screen'>

       <button className=" ml-5 bg-lime-700 text-white px-4 rounded mt-5 mb-5" 
       type="button"
       onClick={() => setOpenModal(true)}> Agregar nuevo profesional</button>
       
        {openModal && <AddProfessional setOpenModal={setOpenModal} closeModal={closeModal} />}

        <input
                    type='text'
                    placeholder='Buscar por nombre'
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className='border border-gray-400 p-1 py-px rounded-lg m-5 w-60'
          />
    


         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-center'>
          {filteredProfessionals.map(professional => (
        <div className=' bg-white rounded-lg w-96'>
          
          <ul>  
                  <br />
                  <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Información básica</h2>
                  <br />
                  <li>Nombre: {professional.name}</li>
                  <li>Edad: {professional.age}</li>
                  <li>Profesión: {professional.profession}</li>
                  <li>Cedula de ciudadania: {professional.numberid}</li>
                  <li>Celular del profesional: {professional.numbercell}</li>
                  <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Cuenta para ingreso a la plataforma</h2>
                  <li>Correo: {professional.mail}</li>
                  <li>Contraseña: {professional.pasword}</li>
                  <div className='grid grid-rows-1 grid-flow-col gap-6 px-32 m-14 justify-center'>
                  <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to={`/editprofessionals/${professional.id}`}  onClick={() => setOpenModalEdit(true)}>Editar</button>
                  <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleDelete(professional.id)}>Delete</button>
                  {openModalEdit && <EditProfessional setOpenModalEdit={setOpenModalEdit} closeModalEdit={closeModalEdit} />}
                  </div>

                 

                </ul>


        </div>
          ))}
       
      </div>
       </div>
  )
}


