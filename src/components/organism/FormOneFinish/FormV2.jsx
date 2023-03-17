import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddStudent() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [representative, setRepresentative] = useState('');
  const [gender, setGender] = useState('');
  const [numberCellphone, setNumberCellphone] = useState('');
  const [selectedChild, setSelectedChild] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedChild) {
      axios.put(`http://localhost:3001/students/${selectedChild.id}`, { name, age, year, gender, representative, numberCellphone  })
        .then(response => {
          const updatedStudent = students.map(student => {
            if (student.id === response.data.id) {
              return response.data;
            }
            return student;
          });
          setStudents(updatedStudent);
          setSelectedChild(null);
          setName('');
          setAge('');
          setRepresentative('');
          setGender('');
          setNumberCellphone('');

        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios.post('http://localhost:3001/students', { name, age, gender, representative, numberCellphone })
        .then(response => {
          setStudents([...students, response.data]);
          setName('');
          setAge('');
          setRepresentative('');
          setGender('');
          setNumberCellphone('');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/students/${id}`)
      .then(response => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEdit = (student) => {
    setSelectedChild(student);
    setName(student.name);
    setAge(student.age);
    setRepresentative(student.representative);
    setGender(student.gender);
    setNumberCellphone(student.number);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">{selectedChild ? 'Save changes' : 'Add book'}</button>
        {selectedChild && (
          <button type="button" onClick={() => setSelectedChild(null)}>Cancel</button>
        )}
      </form>
    </div>
  );
}

export default AddStudent;