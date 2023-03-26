import React, { useState, useEffect } from 'react'
import admin from '../../assets/images/admin.jpg'
import axios from 'axios'
import Swal from "sweetalert2"
import {Link, useNavigate} from 'react-router-dom'


export default function LoginAdmin() {
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post("http://localhost:3030/auth/login", { email, password });
    localStorage.setItem("token", response.data.token);
    navigate("/listprofessionals");
  } catch (error) {
    console.error(error);
  }
};

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div>
                <h2 className='ml-10 mt-5 text-4xl font-bold dark:text-white mt-15'> ¡Hola! <br/> Bienvenido de nuevo. </h2>
                <img className='w-50 h-50 object-cover mt-9' src={admin} alt="" />
            </div>
            <div className='bg-blue-900 flex flex-col justify-center'>
                <form className='max-w-{400px} w-full mx-auto bg-blue-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
                    <div className='flex flex-col text-black py-2'>
                        <label className='text-white'> Email: </label>
                        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="email" id="email"  placeholder="Ingrese su correo electrónico" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div>
                        <label className='text-white'> Password: </label>
                        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none w-full' type="password" id="password" placeholder="Ingrese su contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className='flex justify-between text-white py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me </p>
                        <p> Forgot Password </p>
                    </div>
                    <button className='rounded-lg w-full my-5 py-2 bg-lime-600 shadow-lg text-white' type="submit"> Sing In </button>
                    <Link to={"/"}>
                    <button className=' w-52 my-5 py-2 bg-lime-600 shadow-lg text-white' type="submit"> Soy voluntario </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}