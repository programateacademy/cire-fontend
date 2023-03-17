import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2'

export const EditSelect = () => {
    
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');
    const [q6, setQ6] = useState('');
    const [q7, setQ7] = useState('');
    const [q8, setQ8] = useState('');
    const [q9, setQ9] = useState('');
    const [q10, setQ10] = useState('');
    const [q11, setQ11] = useState('');
    const [q12, setQ12] = useState('');
    const [q13, setQ13] = useState('');
    const [q14, setQ14] = useState('');
    const [q15, setQ15] = useState('');
    const [q16, setQ16] = useState('');
    const [q17, setQ17] = useState('');
    const [q18, setQ18] = useState('');
    

    useEffect(() => {
            axios.get(`https://cire-backend.onrender.com/affective/${_id}`).then((res) => {
                const question = res.data.body;
                setQ1(question.q1);
                setQ2(question.q2);
                setQ3(question.q3);
                setQ4(question.q4);
                setQ5(question.q5);
                setQ6(question.q6);
                setQ7(question.q7);
                setQ8(question.q8);
                setQ9(question.q9);
                setQ10(question.q10);
                setQ11(question.q11);
                setQ12(question.q12);
                setQ13(question.q13);
                setQ14(question.q14);
                setQ15(question.q15);
                setQ16(question.q16);
                setQ17(question.q17);
                setQ18(question.q18);
            }).catch((error) => {
                console.error('Error fetching question:', error);

            });

            
        }, []);



        function editSelects() {
            const editselects = {
              q1: q1,
              q2: q2,
              q3: q3,
              q4: q4,
              q5: q5,
              q6: q6,
              q7: q7,
              q8: q8,
              q9: q9,
              q10: q10,
              q11: q11,
              q12: q12,
              q13: q13,
              q14: q14,
              q15: q15,
              q16: q16,
              q17: q17,
              q18: q18,
            };
          
            Swal.fire({
              title: '¿Está seguro de que desea guardar los cambios?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonText: 'Sí',
              cancelButtonText: 'No'
            }).then((result) => {
              if (result.isConfirmed) {
                axios.put(`https://cire-backend.onrender.com/affective/${_id}`, editselects)
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
                      title: 'Error al actualizar la valoración',
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
            
            <form>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido molestado por alguien?
                            <select id="ques1" required
                            value={q1}
                            onChange={
                                (e) => setQ1(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido muy solo o distante de la gente?
                            <select id="ques2" required
                            value={q2}
                            onChange={
                                (e) => setQ2(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Ha sentido que las cosas iban como usted quería?
                            <select id="ques1" required
                            value={q3}
                            onChange={
                                (e) => setQ3(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido muy preocupado?
                            <select id="ques1" required
                            value={q4}
                            onChange={
                                (e) => setQ4(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido contento por tener buenos amigos o amigas?
                            <select id="ques1" required
                            value={q5}
                            onChange={
                                (e) => setQ5(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Ha tenido mieod de lo que pudiera suceder?
                            <select id="ques1" required
                            value={q6}
                            onChange={
                                (e) => setQ6(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido particularmente estimulado o interesado por algo?
                            <select id="ques1" required
                            value={q7}
                            onChange={
                                (e) => setQ7(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido deprimido o muy infeliz
                            <select id="ques1" required
                            value={q8}
                            onChange={
                                (e) => setQ8(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido lleno de energía?
                            <select id="ques1" required
                            value={q9}
                            onChange={
                                (e) => setQ9(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido muy cansado?
                            <select id="ques1" required
                            value={q10}
                            onChange={
                                (e) => setQ10(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido muy inquieto que no podia permanecer sentado en una silla?
                            <select id="ques1" required
                            value={q11}
                            onChange={
                                (e) => setQ11(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Ha sentido que se estaba diviertiendo mucho? 
                            <select id="ques1" required
                            value={q12}
                            onChange={
                                (e) => setQ12(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido muy alegre o feliz? 
                            <select id="ques1" required
                            value={q13}
                            onChange={
                                (e) => setQ13(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    Se ha sentido con ganas de llorar? 
                            <select id="ques1" required
                            value={q14}
                            onChange={
                                (e) => setQ14(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido eufórico? 
                            <select id="ques1" required
                            value={q15}
                            onChange={
                                (e) => setQ15(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido seguro respecto al futuro?
                            <select id="ques1" required
                            value={q16}
                            onChange={
                                (e) => setQ16(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido aburrido?
                            <select id="ques1" required
                            value={q17}
                            onChange={
                                (e) => setQ17(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300 w-auto">
                    ¿Se ha sentido aburrido?
                            <select id="ques1" required
                            value={q18}
                            onChange={
                                (e) => setQ18(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Selecciona una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>                    
                    </form>

                </div>

                <div className='grid grid-rows-1 grid-flow-col gap-6 px-11 m-14 justify-center'>
                    <button className='bg-lime-700 hover:bg-lime-600 text-white font-bold py-2 px-12 rounded justify-items-center'
                        onClick={editSelects}>Enviar</button>

                    
                </div>


            </div>
            


        </div>
        </div>


    );

}