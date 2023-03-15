import React from "react";

import BackButton from "../../../atoms/BackButton";

const FormStudent = () => {
  return (
    <>
    <div>
      <BackButton />
      </div>

      <div className="mt-1 sm:mt-0 mx-4">
        <div className=" md:grid md:grid-cols-3 md:gap-3 ">
          <div className="  md:col-span-0  ">
            <div className="">
              <h2 className="text-base font-semibold leading-6 text-gray-900">
                Nombre: PEPITO PEREZ
              </h2>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Edad:
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              
            </div>
          </div>
          <div className=" mt-6 md:col-span-5 md:mt-2 lg:ml-20 lg:mr-20">
            <form className="bg-white " action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md bg-white  p-3">
                <h1
                  className="text-rey font-bold "
                  style={{ textAlign: "center", fontSize: "30px" }}
                >
                  ACADÉMICO
                </h1>
                <div className="bg-white px-4 py-5 sm:p-6 ">
                  <div className="  ">
                    <div className="text-center">
                      <h3 className="text-base font-bold leading-2 text-gray-500 text-center py-8 " style={{fontSize:"22px"}}>
                        Trabaja en clases
                      </h3>
                    </div>

                    <div className="col-span-7 sm:col-span-10 ">
                      <label
                        className="block text-sm font-regular leading-6 text-gray-300"
                      >
                        Descripción
                      </label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriber una descripción..."></textarea>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-10">
                      <label
                        className="block text-sm font-regular leading-6 text-gray-900 mt-3"
                      >
                        Plan de acción
                      </label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe el plan de acción..."></textarea>
                    </div>

                    <div className="px-4 py-8 sm:px-0">
                      <h3 className="text-base font-bold leading-6 text-gray-900 text-center" style={{fontSize:"22px"}}>
                        Trabaja en CIRÉ
                      </h3>
                    </div>

                    <div className="col-span-6 sm:col-span-10">
                      <label
                       
                        className="block text-sm font-regular leading-6 text-gray-900"
                      >
                        Descripción
                      </label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriber una descripción..."></textarea>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-10 mt-3">
                      <label
                       
                        className="block text-sm font-regular leading-6 text-gray-600 mt-3"
                      >
                        Plan de acción
                      </label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe el plan de acción..."></textarea>
                    </div>

                    <div className="px-4 sm:px-0 py-8 text-lg">
                      <h1 className=" text-lg font-bold leading-6 text-gray-900 text-center" style={{fontSize:"22px"}}>
                        Trabaja en casa
                      </h1>
                    </div>

                    <div className="col-span-6 sm:col-span-10">
                      <label
                        className="block text-sm font-regular leading-6 text-gray-900"
                      >
                        Descripción
                      </label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriber una descripción..."></textarea>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-10">
                      <label
              
                        className="block text-sm font-regular leading-6 text-gray-900 mt-3"
                      >
                        Plan de acción
                      </label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe el plan de acción..."></textarea>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-8">
                <a
            href="#works"
            className="inline-block px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md border-2 border-green-600"
            >
              Editar
              </a>
                  <a
            href="#works"
            className="inline-block px-8 py-3 border bg-rey border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md " style={{color:"white"}}
            >
              Continuar
              </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormStudent;
