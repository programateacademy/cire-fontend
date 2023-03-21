import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'


function AddStudent9Years ({setOpenModal}) {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [namAttendant, setNamAttendant] = useState('');
    const [sex, setSex] = useState('');
    const [numAttendant, setNumAttendant] = useState('');


    useEffect(() => {
        axios.get('https://cire-backend.onrender.com/kid?age=9').then(response => {
            setStudents(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, [students]);


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://cire-backend.onrender.com/kid/', {
        name,
        age,
        sex,
        namAttendant,
        numAttendant
    }).then(response => {
        const newStudent = response.data.body;
        setStudents([students, newStudent]);
        setOpenModal(false);
        setName('');
        setAge('');
        setNamAttendant('');
        setSex('');
        setNumAttendant('');
        Swal.fire({title: "El estudiante se agregó correctamente"})
    }).catch(error => {
    });
}


    return (
        <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-indigo-100">
                <div className="p-20">
                    <div className="grid gap-6 mb-6 lg:grid-cols-1">
                        <form onSubmit={handleSubmit}>

                            <button className='text-dark'
                                onClick={
                                    () => setOpenModal(false)
                            }>X</button>

                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                                Nombre completo:
                                <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={name}
                                    onChange={
                                        (e) => setName(e.target.value)
                                    }/>
                            </label>

                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                                Edad:
                                <input type="number" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={age}
                                    onChange={
                                        (e) => setAge(e.target.value)
                                    }/>
                            </label>

                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                                Representante:
                                <input type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={namAttendant}
                                    onChange={
                                        (e) => setNamAttendant(e.target.value)
                                    }/>
                            </label>

                            <label htmlFor='gender' className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
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

                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                                Télefono del representante:
                                <input type="number" placeholder="Introduce un número de 10 dígitos" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={numAttendant}
                                    onChange={
                                        (e) => setNumAttendant(e.target.value)
                                    }/>
                            </label>

                            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded justify-items-center' type="submit">
                                Agregar estudiante
                            </button>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AddStudent9Years;
