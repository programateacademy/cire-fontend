import React, { useState } from "react";
import admin from '../../assets/images/admin.jpg';

//import "./styles.css";

export default function LoginAdmin() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className='bg-blue-900 flex flex-col w-full justify-center'>
      <form className='max-w-{400px} w-100% mx-auto bg-blue-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
        <div className='flex flex-col text-black py-2'>
          <label className='text-white'> Email: </label>
          <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="email" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div>
          <label className='text-white'> Password: </label>
          <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className='flex justify-between text-white py-2'>
          <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me </p>
          <p> Forgot Password </p>
        </div>
        <button type='submit' className='w-full my-5 py-2 bg-lime-600 shadow-lg text-white'> Sing In </button>
      </form>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div>
        <h2 className='ml-10 mt-5 text-4x1 font-bold dark:text-white mt-15'> ¡Hola! <br/> Bienvenido de nuevo. </h2>
        <img className='w-full h-full object-cover mt-9' src={admin} alt="" />
      </div>
      <div className="login-form">
        <div className="title"></div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

