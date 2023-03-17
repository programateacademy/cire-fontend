import React, { useState, useEffect } from "react";
import axios from "axios";

function PostInfo() {
  const [schoolDescription, setschoolDescription] = useState("");
  const [schoolAction, setschoolAction] = useState("");
  const [behaviorDescription, setBehaviorDescription] = useState("");
  const [behaviorAction, setBehaviorAction] = useState("");
  const [relationDescription, setRelationDescription] = useState("");
  const [relationACtion, setRelationACtion] = useState("");
  const [workClassDescription, setWorkClassDescription] = useState("");
  const [workClassAction, setWorkClassAction] = useState("");
  const [workCireDescription, setWorkCireDescription] = useState("");
  const [workCireAction, setWorkCireAction] = useState("");
  const [workHomeDescription, setWorkHomeDescription] = useState("");
  const [workHomeAction, setWorkHomeAction] = useState("");
  const [parentDescription, setParentDescription] = useState("");
  const [parentAction, setParentAction] = useState("");
  const [accompanimentDescription, setAccompanimentDescription] = useState("");
  const [accompanimentAction, setAccompanimentAction] = useState("");
  const [selectedInfo, setSelectedInfo] = useState(null);

  useEffect(() => {
    axios
      .get("https://cire-backend.onrender.com/principalForm/")
      .then((response) => {
        setSelectedInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedInfo) {
      axios
        .post("https://cire-backend.onrender.com/principalForm/", {
          schoolDescription,
          schoolAction,
          behaviorDescription,
          behaviorAction,
          relationDescription,
          relationACtion,
          workClassDescription,
          workClassAction,
          workCireDescription,
          workCireAction,
          workHomeDescription,
          workHomeAction,
          parentDescription,
          parentAction,
          accompanimentDescription,
          accompanimentAction,
        })
        .then((response) => {
          setSelectedInfo(response.data.body);
          setschoolDescription("");
          setschoolAction("");
          setBehaviorDescription("");
          setBehaviorAction("");
          setRelationDescription("");
          setRelationACtion("");
          setWorkClassDescription("");
          setWorkClassAction("");
          setWorkCireDescription("");
          setWorkCireAction("");
          setWorkHomeDescription("");
          setWorkHomeAction("");
          setParentDescription("");
          setParentAction("");
          setAccompanimentDescription("");
          setAccompanimentAction("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
    
//   const handleEdit = (formOnee) => {
//     setschoolDescription(formOnee.schoolDescription);
//     setschoolAction(formOnee.schoolAction);
//     setBehaviorDescription(formOnee.behaviorDescription);
//     setBehaviorAction(formOnee.behaviorAction);
//     setRelationACtion(formOnee.relationACtion);
//     setRelationDescription(formOnee.relationDescription);
//     setWorkClassAction(formOnee.workClassAction);
//     setWorkClassDescription(formOnee.workClassDescription);
//     setWorkCireDescription(formOnee.workCireDescription);
//     setWorkCireAction(formOnee.workCireAction);
//     setWorkHomeDescription(formOnee.workHomeDescription);
//     setWorkHomeAction(formOnee.workHomeAction);
//     setParentDescription(formOnee.parentDescription);
//     setParentAction(formOnee.parentAction);
//     setAccompanimentDescription(formOnee.accompanimentDescription);
//     setAccompanimentAction(formOnee.accompanimentAction);
//   };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        Escribe una descripción
          <input
            type="text"
            value={schoolDescription}
            onChange={(e) => setschoolDescription(e.target.value)}
          />
        </label>
        <label>
        Escribe el plan
          <input
            type="text"
            value={schoolAction}
            onChange={(e) => setschoolAction(e.target.value)}
          />
        </label>
        <label>
        Escribe una descripción
          <input
            type="text"
            value={behaviorDescription}
            onChange={(e) => setBehaviorDescription(e.target.value)}
          />
        </label>

        <label>
        Escribe el plan
          <input
            type="text"
            value={behaviorAction}
            onChange={(e) => setBehaviorAction(e.target.value)}
          />
        </label>

        <label>
          Escribe una descripción
          <input
            type="text"
            value={relationDescription}
            onChange={(e) => setRelationDescription(e.target.value)}
          />
        </label>

        <label>
        Escribe el plan
          <input
            type="text"
            value={relationACtion}
            onChange={(e) => setRelationACtion(e.target.value)}
          />
        </label>
        <label>
        Escribe una descripción
          <input
            type="text"
            value={workClassDescription}
            onChange={(e) => setWorkClassDescription(e.target.value)}
          />
        </label>
        <label>
        Escribe el plan
          <input
            type="text"
            value={workClassAction}
            onChange={(e) => setWorkClassAction(e.target.value)}
          />
        </label>

        <label>
        Escribe una descripción
          <input
            type="text"
            value={workCireDescription}
            onChange={(e) => setWorkCireDescription(e.target.value)}
          />
        </label>

        <label>
        Escribe el plan
          <input
            type="text"
            value={workCireAction}
            onChange={(e) => setWorkCireAction(e.target.value)}
          />
        </label>
        <label>
        Escribe una descripción
          <input
            type="text"
            value={workHomeDescription}
            onChange={(e) => setWorkHomeDescription(e.target.value)}
          />
        </label>
        <label>
        Escribe el plan
          <input
            type="text"
            value={workHomeAction}
            onChange={(e) => setWorkHomeAction(e.target.value)}
          />
        </label>

        <label>
        Escribe una descripción
          <input
            type="text"
            value={parentDescription}
            onChange={(e) => setParentDescription(e.target.value)}
          />
        </label>

        <label>
        Escribe el plan
          <input
            type="text"
            value={parentAction}
            onChange={(e) => setParentAction(e.target.value)}
          />
        </label>
        <label>
        Escribe una descripción
          <input
            type="text"
            value={accompanimentDescription}
            onChange={(e) => setAccompanimentDescription(e.target.value)}
          />
        </label>
        <label>
        Escribe el plan
          <input
            type="text"
            value={accompanimentAction}
            onChange={(e) => setAccompanimentAction(e.target.value)}
          />
        </label>

        <button type="submit" onClick={handleSubmit}>Enviar</button>


        {/* <button type="submit">
          {selectedInfo ? "Save changes" : "Add iformation"}
        </button>
        {selectedInfo && (
          <button type="button" onClick={() => setSelectedInfo(null)}>
            Cancel
          </button>
        )} */}
      </form>
    </div>
  );
}

export default PostInfo;
