import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';
import { EditStudent } from './EditStudent';



export const ListStudents = () => {
  
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const handleDelete = (id) => {
 {
      axios.delete(`http://localhost:3000/students/${id}`)
        .then(response => {
          setStudents(students.filter(student => student.id !== id));
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const filteredStudents = students.filter(student => {
    return student.name.toLowerCase().includes(searchTerm.toLowerCase());
});

const [openModal, setOpenModal] = useState(false);

function closeModal() {
  setOpenModal(false);
}

const [openModalEdit, setOpenModalEdit] = useState(false);

function closeModalEdit() {
  setOpenModalEdit(false);
}
  
  const listmovies = filteredStudents.map(students=> {
    return(
      <div className='container' key={students.id}>
      <div className='row'>
        <div className='columna-lista'>
        <ul className='list-group'>
          <li className='list-group-item-title' >{students.name}</li>
          <li className='list-group-item'>{students.age}</li>
          <li className='list-group-item'>{students.representative}</li>
          <li className='list-group-item'>{students.gender}</li>
          <li className='list-group-item'>{students.number}</li>
    
        </ul>
    
        </div>
      </div>
    </div>
    )
  })
  

  
    return (

       <div className='bg-indigo-100 '>
        
       <button className=" ml-4 bg-lime-700 text-white px-4 rounded-lg mt-5 mb-5 w-60"
       type="button"
       onClick={() => setOpenModal(true)}> Agregar nuevo estudiante</button>

       {openModal && <AddStudent setOpenModal={setOpenModal} closeModal={closeModal} />}
          
       <input
                    type='text'
                    placeholder='Buscar por nombre'
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className='border border-gray-400 p-1 py-px rounded-lg m-5 w-60'
          />
       
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-center'>
          {filteredStudents.map(student => (
        <div className=' bg-white rounded-lg w-96'>
            
            
            <ul>  
                  <br />
                  <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Información básica</h2>
                  <br />
                  <li>Nombre: {student.name}</li>
                  <li>Edad: {student.age}</li>
                  <li>Representante: {student.representative}</li>
                  <li>Sexo: {student.gender}</li>
                  <li>Celular acudiente: {student.numberCellphone}</li>
                  <div className='grid grid-rows-1 grid-flow-col gap-6 px-32 m-14 justify-center'>
                  <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to={`/editstudents/${student.id}`} onClick={() => setOpenModalEdit(true)}>Editar</button>
                  <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleDelete(student.id)}>Delete</button>
                  {openModalEdit && <EditStudent setOpenModalEdit={setOpenModalEdit} closeModalEdit={closeModalEdit} />}
                  </div>

                  <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Formularios de evaluación</h2>

                </ul>

        </div>
    
           
          ))}
   
      </div>
       </div>
  )
}