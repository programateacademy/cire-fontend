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
          {students.map(student => (
        <div className='max-w-sm w-full lg:max-w-full lg:flex '>
          <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'>
              <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                <ul>
                  <h2 className='text-xl font-semibold font-sans text-zinc-600 text-center text-sky-700'>Información básica</h2>
                  <li>Nombre: {student.name}</li>
                  <li>Edad: {student.age}</li>
                  <li>Sexo: {student.representative}</li>
                  <li>Representante: {student.gender}</li>
                  <li>Celular acudiente: {student.number}</li>
                  <Link to={`/editstudents/${student.id}`}><li>Editar</li></Link>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                </ul>
              </div>
          </div>
        </div>
           
          ))}
   
     

        <li className="nav-item"><a href="addstudent">Agregar Estudiante</a></li>
       
      </div>
  )
}


