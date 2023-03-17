import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddInfo() {
  const [schoolDescription, setschoolDescription] = useState('');
  const [schoolAction, setschoolAction] = useState('');
  const [behaviorDescription, setBehaviorDescription] = useState('');
  const [behaviorAction, setBehaviorAction] = useState('');
  const [relationDescription, setRelationDescription] = useState('');
  const [relationACtion, setRelationACtion] = useState('');
  const [workClassDescription, setWorkClassDescription] = useState('');
  const [workClassAction, setWorkClassAction] = useState('');
  const [workCireDescription, setWorkCireDescription] = useState('');
  const [workCireAction, setWorkCireAction] = useState('');
  const [workHomeDescription, setWorkHomeDescription] = useState('');
  const [parentDescription, setParentDescription] = useState('');
  const [parentAction, setParentAction] = useState('');
  const [accompanimentDescription, setAccompanimentDescription] = useState('');
  const [accompanimentAction, setAccompanimentAction] = useState('');


  useEffect(() => {
    axios.get('https://cire-backend.onrender.com/principalForm')
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedInfo) {
      axios.put(`https://cire-backend.onrender.com/principalForm${selectedInfo._id}`, { 
        schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion,
        workClassDescription,workClassAction, workCireDescription, workCireAction, workHomeDescription, parentDescription, parentAction,
        accompanimentDescription, accompanimentAction })
        .then(response => {
          const updatedInfo = formOne.map(formOnee => {
            if (formOnee .id === response.data.body) {
              return response.data;
            }
            return formOnee;
          });
          setschoolDescription(updatedInfo);
          setschoolAction('');
          setBehaviorDescription('');
          setBehaviorAction('');
          setRepresentative('');
          setRelationDescription('');
          setWorkClassAction('');
          setWorkClassDescription('');
          setWorkCireDescription('');
          setWorkCireAction('');
          setWorkHomeDescription('');
          setParentDescription('');
          setRepresentative('');
          setRelationDescription('');
          setParentAction('');
          setAccompanimentDescription('');
          setAccompanimentAction('');


        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios.post('https://cire-backend.onrender.com/principalForm', { schoolDescription, schoolAction, behaviorDescription, behaviorAction, relationDescription, relationACtion,
      workClassDescription,workClassAction, workCireDescription, workCireAction, workHomeDescription, parentDescription, parentAction,
      accompanimentDescription, accompanimentAction })
        .then(response => {
          setschoolDescription([...students, response.data.body]);
          setschoolAction('');
          setBehaviorDescription('');
          setBehaviorAction('');
          setRepresentative('');
          setRelationDescription('');
          setWorkClassAction('');
          setWorkClassDescription('');
          setWorkCireDescription('');
          setWorkCireAction('');
          setWorkHomeDescription('');
          setParentDescription('');
          setRepresentative('');
          setRelationDescription('');
          setParentAction('');
          setAccompanimentDescription('');
          setAccompanimentAction('');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };


  const handleEdit = (formOnee) => {

    setschoolDescription(formOnee.schoolDescription);
    setschoolAction(formOnee.schoolAction);
          setBehaviorDescription(formOnee.behaviorDescription);
          setBehaviorAction(formOnee.behaviorAction);
          setRepresentative(formOnee.behaviorDescription);
          setRelationDescription(formOnee.relationDescription);
          setWorkClassAction(formOnee.workClassDescription);
          setWorkClassDescription(formOnee.workClassAction);
          setWorkCireDescription(formOnee.workCireDescription);
          setWorkCireAction(formOnee.workCireAction);
          setWorkHomeDescription(formOnee.workHomeDescription);
          setParentDescription(formOnee.workHomeAction);
          setParentAction(formOnee.parentAction);
          setAccompanimentDescription(formOnee.accompanimentDescription);
          setAccompanimentAction(formOnee.accompanimentAction);
   
    
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