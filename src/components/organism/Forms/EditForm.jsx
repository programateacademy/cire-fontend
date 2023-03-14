import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export const EditForm = () => {

const params = useParams()
const [description, setDescription] = useState("");
const [actionplan, setActionplan] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/formOnee/', {id: params.id}).then(res => {
        console.log(res.data[0]) 
        const form = res.data[0]
        setName(form.description);
        setAge(form.actionplan);
    })
  }, [])

  function editForm(){

    var editForms = {
  
      description:description,
      actionplan: actionplan,
      id: params.id
    
    }
  
  console.log(editForms)
  
    axios.put('http://localhost:3001/', editForm)
    .then(res => {
      console.log(res.data)
      alert(res.data)
    })
    .then(err => {
      console.log(err)
    })
  
  
  
  }




  return (
    <div>
   
        <label>
          Nombre:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Edad:
          <input type="text" value={actionplan} onChange={(e) => setActionplan(e.target.value)} />
        </label>
        

        <button className='btn btn-success' onClick={editForms}>Enviar</button>
    </div>
  );
  
}
