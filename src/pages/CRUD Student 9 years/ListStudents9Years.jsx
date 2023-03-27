import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import AddStudent from '../../components/organism/CRUD Students/AddStudent';
import EditStudent from '../../components/organism/CRUD Students/EditStudent';
import swal from 'sweetalert'
import Navbar from '../../components/organism/NavbarAdmin'
export const ListStudents9Years = () => {

    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        axios.get('https://cire-backend-63yh.onrender.com/kid?age=9').then(response => {
            setStudents(response.data.body);
        }).catch(error => {
            console.log(error);
        });
    }, [students]);


    const handleDelete = (id) => {
        swal({
            title: "¿Quieres eliminar este registro?",
            text: "Una vez eliminado, no podrás recuperar la información",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://cire-backend-63yh.onrender.com/kid/${id}`).then(response => { // actualizar la lista de estudiantes después de eliminar uno
                    setStudents(students.filter(student => student._id !== id));
                }).catch(error => {
                    console.log(error);
                });
            }
        });
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

    const listmovies = filteredStudents.map(students => {
        return (
            <div className='container'
                key={
                    students.id
            }>
                <div className='row'>
                    <div className='columna-lista'>
                        <ul className='list-group'>
                            <li className='list-group-item-title'>
                                {
                                students.name
                            }</li>
                            <li className='list-group-item'>
                                {
                                students.age
                            }</li>
                            <li className='list-group-item'>
                                {
                                students.namAttendant
                            }</li>
                            <li className='list-group-item'>
                                {
                                students.sex
                            }</li>
                            <li className='list-group-item'>
                                {
                                students.numAttendant
                            }</li>

                        </ul>

                    </div>
                </div>
            </div>
        )
    })


    return (

        <div className='bg-indigo-100 h-full'>
            <Navbar />
            <button className=" ml-4 bg-lime-700 text-white px-4 rounded-lg mt-5 mb-5 w-60" type="button"
                onClick={
                    () => setOpenModal(true)
            }>
                Agregar nuevo estudiante</button>

            {
            openModal && <AddStudent setOpenModal={setOpenModal}
                closeModal={closeModal}/>
        }

            <input type='text' placeholder='Buscar por nombre'
                onChange={
                    (event) => setSearchTerm(event.target.value)
                }
                className='border border-gray-400 p-1 py-px rounded-lg m-5 w-60'/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-center'>
                {
                filteredStudents.map(student => (
                    <div className=' bg-white rounded-lg w-96'>


                        <ul>
                            <br/>
                            <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Información básica</h2>
                            <br/>
                            <li>Nombre: {
                                student.name
                            }</li>
                            <li>Edad: {
                                student.age
                            }</li>
                            <li>Representante: {
                                student.namAttendant
                            }</li>
                            <li>Sexo: {
                                student.sex
                            }</li>
                            <li>Celular acudiente: {
                                student.numAttendant
                            }</li>
                            <div className='grid grid-rows-1 grid-flow-col gap-6 px-32 m-14 justify-center'>
                            <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    setOpenModalEdit(true);
                    setSelectedStudent(student._id);
                  }}
                >
                  Editar
                </button>
                                <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                                    onClick={
                                        () => handleDelete(student._id)
                                }>Delete</button>
                                  {openModalEdit && (
                  <EditStudent
                    studentId={selectedStudent}
                    setOpenModalEdit={setOpenModalEdit}
                    closeModalEdit={closeModalEdit}
                    student={selectedStudent}
                  />
                )}
                            </div>

                            <h2 className='text-xl font-semibold font-sans text-center text-sky-700'>Formularios de evaluación</h2>

                            <Link to={"/pagination5.2years"}>
                                <button>Scale</button>
                            </Link>
                            <br/>
                            <Link to={"/pagination5years"}>
                                <button>Crear un perfil Psico – Socio – Escolar del niño.</button>
                            </Link>
                        </ul>

                    </div>


                ))
            } </div>
        </div>
    )
}
export default ListStudents9Years;