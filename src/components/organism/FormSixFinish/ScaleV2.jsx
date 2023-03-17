import axios from 'axios';
import React, {useEffect, useState} from 'react'



function ScaleV2() {

  const [selectedQuestion, setSelectedQuestion] = useState(null);

 
  const [affectiveData, setAffectiveData] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://cire-backend.onrender.com/affective")
      .then((response) => {
        setAffectiveData(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {Array.isArray(affectiveData) ? (
  <ul>
    {affectiveData.map((data) =>
      Object.entries(data).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))
    )}
  </ul>
) : (
  <p>No se pudieron cargar los datos.</p>
)}


      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          
          setSelectedQuestion(_id);
        }}
      >
        Editar
      </button>
    </div>
  );
}

export default ScaleV2;
