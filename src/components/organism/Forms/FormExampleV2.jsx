// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// export const FormExampleV2 = () => {
//     const [description, setDescription] = useState([]);
//     const [actionplan, setActionplan]= useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3001/formOnee')
//           .then(response => {
//             setStudents(response.data);
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       }, []);

//       const handleSubmit = (event) => {
//         event.preventDefault();
//         if (selectedChild) {
//           axios.put(`http://localhost:3001/formOnee'/${selectedChild.id}`, { description,  actionplan })
//             .then(response => {
//               const updatedForm = formOnee.map(form => {
//                 if (form .id === response.data.id) {
//                   return response.data;
//                 }
//                 return form;
//               });
//               setStudents(updatedForm);
//               setSelectedChild(null);
//               setDescription('');
//               setActionplan('');
//             })
//             .catch(error => {
//               console.log(error);
//             });
//         } else {
//           axios.post('http://localhost:3001/formOnee', { description,  actionplan })
//             .then(response => {
//               setForms([...forms, response.data]);
//               setDescription('');
//               setActionplan('');
//             })
//             .catch(error => {
//               console.log(error);
//             });
//         }
//       };
// }

// const handleDelete = (id) => {
//     axios.delete(`http://localhost:3001/formOnee/${id}`)
//       .then(response => {
//         setForms(formOnee.filter(form => form.id !== id));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const handleEdit = (form) => {
//     setSelectedChild(form);
//     setDescription(form.description);
//     setActionplan(form.actionplan);
//   };

//   return (
//     <div className='bg-indigo-100 h-screen'>
//       {forms.map(form => (
//     <div className='max-w-sm w-full lg:max-w-full lg:flex '>
//       <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'>
//           <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
//             <ul>
//               <h2 className='text-xl font-semibold font-sans text-zinc-600 text-center text-sky-700'>Información básica</h2>
//               <li>Nombre: {form.description}</li>
//               <li>Edad: {form.actionplan}</li>
//               {/* <Link to={`/editstudents/${student.id}`}><li>Editar</li></Link> */}
//               <button onClick={() => handleDelete(form.id)}>Delete</button>
//             </ul>
//           </div>
//       </div>
//     </div>

//       ))}
//       </div>
//   )

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const FormExampleV2 = () => {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [description, setDescription] = useState("");
  const [actionplan, setActionplan] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/formOnee")
      .then((response) => {
        setForms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedForm) {
      axios
        .put(`http://localhost:3001/formOnee/${selectedForm.id}`, {
          academico: {
            class: {
              description,
              actionplan,
            },
            cire: {
              description,
              actionplan,
            },
            home: {
              description,
              actionplan,
            },
          },
          convivencia: {
            school: {
              description,
              actionplan,
            },
            home: {
              description,
              actionplan,
            },
            relationships: {
              description,
              actionplan,
            },
          },
          apoyo: {
            guidelines: {
              description,
              actionplan,
            },
            accompaniment: {
              description,
              actionplan,
            },
          },
        })
        .then((response) => {
          const updatedForms = forms.map((form) => {
            if (form.id === response.data.id) {
              return response.data;
            }
            return form;
          });
          setForms(updatedForms);
          setSelectedForm(null);
          setDescription("");
          setActionplan("");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("http://localhost:3001/formOnee", {
          academico: {
            class: {
              description,
              actionplan,
            },
            cire: {
              description,
              actionplan,
            },
            home: {
              description,
              actionplan,
            },
          },
          convivencia: {
            school: {
              description,
              actionplan,
            },
            home: {
              description,
              actionplan,
            },
            relationships: {
              description,
              actionplan,
            },
          },
          apoyo: {
            guidelines: {
              description,
              actionplan,
            },
            accompaniment: {
              description,
              actionplan,
            },
          },
        })
        .then((response) => {
          setForms([...forms, response.data]);
          setDescription("");
          setActionplan("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/formOnee/${id}`)
      .then((response) => {
        setForms(forms.filter((form) => form.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (form) => {
    setSelectedForm(form);
    setDescription(form.description);
    setActionplan(form.actionplan);
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Formulario</h1>
      {forms.map((item) => (
        <div key={item.id}>
          {/* Aquí va la sección de cada formulario */}
          <h2 className="text-lg font-bold mb-2">{`Formulario ${item.id}`}</h2>
          {/* Sección Académico */}
          {item.academico && (
            <div className="border p-4 rounded-lg mb-4">
              <h3 className="text-md font-bold mb-2">Académico</h3>
              <div className="grid grid-cols-2 gap-4">
                {item.academico.class && (
                  <>
                    <label htmlFor={`class-${item.id}`}>
                      Class Description:
                    </label>
                    <input
                      type="text"
                      id={`class-${item.id}`}
                      value={item.academico.class.description}
                      className="border p-2 rounded-md"
                    />
                    <label htmlFor={`class-actionplan-${item.id}`}>
                      Class Action Plan:
                    </label>
                    <input
                      type="text"
                      id={`class-actionplan-${item.id}`}
                      value={item.academico.class.actionplan}
                      className="border p-2 rounded-md"
                    />
                  </>
                )}
                {item.academico.cire && (
                  <>
                    <label htmlFor={`cire-${item.id}`}>Cire Description:</label>
                    <input
                      type="text"
                      id={`cire-${item.id}`}
                      value={item.academico.cire.description}
                      className="border p-2 rounded-md"
                    />
                    <label htmlFor={`cire-actionplan-${item.id}`}>
                      Cire Action Plan:
                    </label>
                    <input
                      type="text"
                      id={`cire-actionplan-${item.id}`}
                      value={item.academico.cire.actionplan}
                      className="border p-2 rounded-md"
                    />
                  </>
                )}
                {item.academico.home && (
                  <>
                    <label htmlFor={`home-${item.id}`}>Home Description:</label>
                    <input
                      type="text"
                      id={`home-${item.id}`}
                      value={item.academico.home.description}
                      className="border p-2 rounded-md"
                    />
                    <label htmlFor={`home-actionplan-${item.id}`}>
                      Home Action Plan:
                    </label>
                    <input
                      type="text"
                      id={`home-actionplan-${item.id}`}
                      value={item.academico.home.actionplan}
                      className="border p-2 rounded-md"
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
