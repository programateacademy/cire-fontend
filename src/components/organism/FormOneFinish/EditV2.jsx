import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const EditInfo = () => {
  const params = useParams();
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

  useEffect(() => {
    axios
      .get("https://cire-backend.onrender.com/principalForm/", {
        id: params.id,
      })
      .then((res) => {
        console.log(res.data[0]);
        const formOnee =
          res.data[0] > setschoolDescription(formOnee.schoolDescription);
        setschoolAction(formOnee.schoolAction);
        setBehaviorDescription(formOnee.behaviorDescription);
        setBehaviorAction(formOnee.behaviorAction);
        setRelationACtion(formOnee.relationACtion);
        setRelationDescription(formOnee.relationDescription);
        setWorkClassAction(formOnee.workClassAction);
        setWorkClassDescription(formOnee.workClassDescription);
        setWorkCireDescription(formOnee.workCireDescription);
        setWorkCireAction(formOnee.workCireAction);
        setWorkHomeDescription(formOnee.workHomeDescription);
        setWorkHomeAction(formOnee.workHomeAction);
        setParentDescription(formOnee.parentDescription);
        setParentAction(formOnee.parentAction);
        setAccompanimentDescription(formOnee.accompanimentDescription);
        setAccompanimentAction(formOnee.accompanimentAction);
      });
  }, []);

  function ediInfo() {
    let editFormOne = {
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
      workHomeAction: workHomeAction,
      parentDescription: parentDescription,
      parentAction: parentAction,
      accompanimentDescription: accompanimentDescription,
      accompanimentAction: accompanimentAction,

      id: params.id,
    };

    console.log(ediInfo);

    axios
      .put("https://cire-backend.onrender.com/principalForm/", editFormOne )
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div>
     <label>
          Nombre:
          <input
            type="text"
            value={schoolDescription}
            onChange={(e) => setschoolDescription(e.target.value)}
          />
        </label>
        <label>
          Edad:
          <input
            type="text"
            value={schoolAction}
            onChange={(e) => setschoolAction(e.target.value)}
          />
        </label>
        <label>
          Representante:
          <input
            type="text"
            value={behaviorDescription}
            onChange={(e) => setBehaviorDescription(e.target.value)}
          />
        </label>

        <label>
          Género:
          <input
            type="text"
            value={behaviorAction}
            onChange={(e) => setBehaviorAction(e.target.value)}
          />
        </label>

        <label>
          Télefono del representante:
          <input
            type="text"
            value={relationDescription}
            onChange={(e) => setRelationDescription(e.target.value)}
          />
        </label>

        <label>
          Télefono del representante:
          <input
            type="text"
            value={relationACtion}
            onChange={(e) => setRelationACtion(e.target.value)}
          />
        </label>
        <label>
          Télefono del representante:
          <input
            type="text"
            value={workClassDescription}
            onChange={(e) => setWorkClassDescription(e.target.value)}
          />
        </label>
        <label>
          Télefono del representante:
          <input
            type="text"
            value={workClassAction}
            onChange={(e) => setWorkClassAction(e.target.value)}
          />
        </label>

        <label>
          Télefono del representante:
          <input
            type="text"
            value={workCireDescription}
            onChange={(e) => setWorkCireDescription(e.target.value)}
          />
        </label>

        <label>
          Télefono del representante:
          <input
            type="text"
            value={workCireAction}
            onChange={(e) => setWorkCireAction(e.target.value)}
          />
        </label>
        <label>
          Télefono del representante:
          <input
            type="text"
            value={workHomeDescription}
            onChange={(e) => setWorkHomeDescription(e.target.value)}
          />
        </label>
        <label>
          Télefono del representante:
          <input
            type="text"
            value={workHomeAction}
            onChange={(e) => setWorkHomeAction(e.target.value)}
          />
        </label>

        <label>
          Télefono del representante:
          <input
            type="text"
            value={parentDescription}
            onChange={(e) => setParentDescription(e.target.value)}
          />
        </label>

        <label>
          Télefono del representante:
          <input
            type="text"
            value={parentAction}
            onChange={(e) => setParentAction(e.target.value)}
          />
        </label>
        <label>
          Télefono del representante:
          <input
            type="text"
            value={accompanimentDescription}
            onChange={(e) => setAccompanimentDescription(e.target.value)}
          />
        </label>
        <label>
          Télefono del representante:
          <input
            type="text"
            value={accompanimentAction}
            onChange={(e) => setAccompanimentAction(e.target.value)}
          />
        </label>

      <button className="btn btn-success" onClick={ediInfo}>
        Enviar
      </button>
    </div>
  );
};
