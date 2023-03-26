import React, { useState, useEffect } from 'react'
import login from '../../assets/images/login.jpg'
import Swal from "sweetalert2"
import axios from 'axios'

const MAX_LOGIN_ATTEMPTS = 3;

export default function LoginProfe() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://cire-backend.onrender.com/auth/login',
        {
          email: email,
          password: password,
        }
      );

      const token = localStorage.setItem('token');
      if (response.data.body === 'superAdmin') {
        window.location.href = '/ListProfessionals';
      } else {
        throw new Error('No tiene acceso');
      }
    } catch (error) {
      console.error(error);
      setLoginAttempts(loginAttempts + 1);
      if (loginAttempts >= MAX_LOGIN_ATTEMPTS - 1) {
        setIsDisabled(true);
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: `Ha excedido el número máximo de intentos (${MAX_LOGIN_ATTEMPTS}). Inténtelo de nuevo más tarde.`,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'El correo o la contraseña son incorrectos',
        });
      }
    }
  };
 
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div>
                <h2 className='ml-10 mt-5 text-4x1 font-bold dark:text-white mt-15 '> ¡Hola! <br/> Bienvenido de nuevo.</h2>
                <img className='w-50 h-50 object-cover mr-2' src={login} alt="" />
            </div>
            <div className='bg-blue-900 flex flex-col justify-center'>
                <form className='max-w-{400px} w-full mx-auto bg-blue-900 p-8 px-8 rounded-lg' onSubmit={handleLogin}>
                    <div className='flex flex-col text-black py-2'>
                        <label className='text-white'> Email: </label>
                        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="email" id="email"
            placeholder="Ingrese su correo electrónico" value={email} onChange={(event) => setEmail(event.target.value)}  required/>
                    </div>
                    <div className='flex flex-col text-black py-2'>
                        <label className='text-white'> Password: </label>
                        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="password" id="password" placeholder="Ingrese su contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className='flex justify-between text-white py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox"/> Remember Me </p>
                    </div>
                    <button className='w-full my-5 py-2 bg-lime-600 shadow-lg text-white' type="submit" disabled={isDisabled}> Sing In </button>
                </form>
            </div>
        </div>
    )
}
