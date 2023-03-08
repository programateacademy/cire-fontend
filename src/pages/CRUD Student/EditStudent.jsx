import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export const EditStudent = () => {

const params = useParams()
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [representative, setRepresentative] = useState('');
  const [gender, setGender] = useState('');
  const [numberCellphone, setNumberCellphone] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/students/', {id: params.id}).then(res => {
        console.log(res.data[0]) 
        const student = res.data[0]
        setName(student.name);
        setAge(student.age);
        setRepresentative(student.representative);
        setGender(student.gender);
        setNumberCellphone(student.number); 
  
    })
  }, [])

  function ediStudents(){

    var editstudents = {
  
      name: name,
      age: age,
      representative: representative,
      gender: gender,
      numberCellphone: numberCellphone,
      id: params.id
    
    }
  
  console.log(ediStudents)
  
    axios.put('http://localhost:3001/', editstudents)
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
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Edad:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Representante:
          <input type="text" value={representative} onChange={(e) => setRepresentative(e.target.value)} />
        </label>

        <label>
          Género:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>

        <label>
          Télefono del representante:
          <input type="text" value={numberCellphone} onChange={(e) => setNumberCellphone(e.target.value)} />
        </label>

        <button className='btn btn-success' onClick={ediStudents}>Enviar</button>
    </div>
  );
  
}
