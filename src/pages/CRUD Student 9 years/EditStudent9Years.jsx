import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2'

export const EditStudent9Years = ({ setOpenModalEdit, studentId }) => {
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [namAttendant, setNamAttendant] = useState('');
    const [sex, setSex] = useState('');
    const [numAttendant, setNumAttendant] = useState('');
    

    useEffect(() => {
            axios.get(`https://cire-backend.onrender.com/kid/${studentId}`).then((res) => {
                const student = res.data.body;
                setName(student.name);
                setAge(student.age);
                setNamAttendant(student.namAttendant);
                setSex(student.sex);
                setNumAttendant(student.numAttendant);
            }).catch((error) => {
                console.error('Error fetching student:', error);

            });

            
        }, []);



        function editStudents() {
            const editstudents = {
              name: name,
              age: age,
              namAttendant: namAttendant,
              sex: sex,
              numAttendant: numAttendant
            };
          
            Swal.fire({
              title: '¿Está seguro de que desea guardar los cambios?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonText: 'Sí',
              cancelButtonText: 'No'
            }).then((result) => {
              if (result.isConfirmed) {
                axios.put(`https://cire-backend.onrender.com/kid/${studentId}`, editstudents)
                  .then((res) => {
                    console.log(res.data.body);
                    Swal.fire({
                      title: 'Cambios guardados',
                      icon: 'success'
                    });
                  })
                  .catch((error) => {
                    console.error('Error updating student:', error);
                    Swal.fire({
                      title: 'Error al actualizar al estudiante',
                      icon: 'error'
                    });
                  });
              }
            });
          }

    return (
        <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-indigo-100">
          <div className="p-20">
            <div className="grid gap-6 mb-6 lg:grid-cols-">
            <button
              className="text-dark"
              onClick={() => setOpenModalEdit(false)}
            >
              X
            </button>
            <form>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                        Nombre completo:
                        <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={name}
                            onChange={
                                (e) => setName(e.target.value)
                            }/>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                        Edad:
                        <input type="number" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={age}
                            onChange={
                                (e) => setAge(e.target.value)
                            }/>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                        Representante:
                        <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={namAttendant}
                            onChange={
                                (e) => setNamAttendant(e.target.value)
                            }/>
                    </label>

                    <label htmlFor='gender' className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                        Género:
                        <select id="gender" required
                            value={sex}
                            onChange={
                                (e) => setSex(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </label>
                


                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                        Télefono del representante:
                        <input type="number" placeholder="Introduce un número de 10 dígitos" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={numAttendant}
                            onChange={
                                (e) => setNumAttendant(e.target.value)
                            }/>
                    </label>
                    </form>

                </div>

                <div className='grid grid-rows-1 grid-flow-col gap-6 px-11 m-14 justify-center'>
                    <button className='bg-lime-700 hover:bg-lime-600 text-white font-bold py-2 px-12 rounded justify-items-center'
                        onClick={editStudents}>Enviar</button>

                    
                </div>


            </div>
            


        </div>
        </div>


    );

}
export default EditStudent9Years;