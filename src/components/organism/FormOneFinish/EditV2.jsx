import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export const EditV2 = () => {

const params = useParams()

  const [schoolDescription, setSchoolDescription] = useState();
  const [schoolAction, setSchoolAction] = useState('');
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
    axios.get('http://localhost:3001/students/', {id: params.id}).then(res => {
        console.log(res.data[0]) 
        const formOne = res.data[0]
        setSchoolDescription(form.schoolDescription);
        setSchoolAction(forms.schoolAction);
        setBehaviorDescription(form.behaviorDescription);
        setBehaviorAction(form.behaviorAction);
        setRelationDescription(form.relationDescription);
        setRelationACtion(form.relationACtion); 
        setWorkClassDescription(form.workClassDescription);
        setWorkClassAction(forms.workClassAction);
        setWorkCireDescription(form.workCireDescription);
        setWorkCireAction(form.workCireAction);
        setWorkHomeDescription(form.workHomeDescription);
        setParentDescription(form.parentDescription); 
        setParentAction(form.parentAction);
        setAccompanimentDescription(form.accompanimentDescription);
        setAccompanimentAction(form.accompanimentAction); 

    })
  }, [])

  function editForms(){

    let editedForms = {

      schoolDescription: schoolDescription,
      schoolAction: schoolAction,
      behaviorDescription: behaviorDescription,
      behaviorAction: behaviorAction,
      relationDescription: relationDescription,
      relationACtion: relationACtion,
      workClassDescription: workClassDescription,
      workClassAction: workClassAction,
      workCireDescription: workCireDescription,
      workCireAction: workCireAction,
      workHomeDescription: workHomeDescription,
      parentDescription: parentDescription,
      parentAction: parentAction,
      accompanimentDescription: accompanimentDescription,
      accompanimentAction: accompanimentAction,
      id: params.id

    }

  console.log(editForms)

    axios.put('http://localhost:3001/', editedForms)
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

        <button className='btn btn-success' onClick={editForms}>Enviar</button>
    </div>
  );

}