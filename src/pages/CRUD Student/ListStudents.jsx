import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const ListStudents = () => {
  
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

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/students/${id}`)
      .then(response => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEdit = (student) => {
    setSelectedChild(student);
    setName(student.name);
    setAge(student.age);
    setRepresentative(student.representative);
    setGender(student.gender);
    setNumberCellphone(student.number);
  };
  
  const listmovies = students.map(students=> {
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



      
       <div className='bg-indigo-100 h-screen'>

       <button className=" ml-4 bg-lime-700 text-white px-4 rounded mt-5 mb-5"><a href="addstudent">Agregar nuevo estudiante</a></button>


         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-center'>
          {students.map(student => (
        <div className=' bg-white rounded-lg w-96'>

<ul>  
                  <br />
                  <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Información básica</h2>
                  <br />
                  <li>Nombre: {student.name}</li>
                  <li>Edad: {student.age}</li>
                  <li>Sexo: {student.representative}</li>
                  <li>Representante: {student.gender}</li>
                  <li>Celular acudiente: {student.number}</li>
                  <div className='grid grid-rows-1 grid-flow-col gap-6 px-32 m-14 justify-center'>
                  <Link className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to={`/editstudents/${student.id}`}><li>Editar</li></Link>
                  <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleDelete(student.id)}>Delete</button>
                  </div>

                  <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Formularios de evaluación</h2>

                </ul>



        </div>
    
           
          ))}
   
     

       
       
      </div>
       </div>
  )
}


