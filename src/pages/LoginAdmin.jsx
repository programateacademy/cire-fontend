import React from 'react'
import admin from './img/admin.jpg'

export default function LoginAdmin() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div>
                <h2 className='text-4x1 dark:text-white mt-15'> ¡Hola! <br/> Bienvenido de nuevo. </h2>
                <img className='w-full h-full object-cover mt-9' src={admin} alt="" />
            </div>
            <div className='bg-blue-900 flex flex-col justify-center'>
                <form className='max-w-{400px} w-full mx-auto bg-blue-900 p-8 px-8 rounded-lg'>
                    <div className='flex flex-col text-black py-2'>
                        <label className='text-white'> Email: </label>
                        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" />
                    </div>
                    <div>
                        <label className='text-white'> Password: </label>
                        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="password" />
                    </div>
                    <div className='flex justify-between text-white py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me </p>
                        <p> Forgot Password </p>
                    </div>
                    <button className='w-full my-5 py-2 bg-lime-600 shadow-lg text-white'> Sing In </button>
                </form>
            </div>
        </div>
    )
}
