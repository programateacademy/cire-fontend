import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddInfo() {
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
  const { id } = useParams();

  const kid = id
  const handleSubmit = (event) => {
    event.preventDefault();
            axios
              .post("https://cire-backend.onrender.com/principalForm/", {
                kid,
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
        
  return (
    <div class="w-full h-50 max-w-s">
      <form class="bg-red shadow-md rounded px-10 pt-6 pb-8 mb-10 mt-12" onSubmit={handleSubmit}>
      <div class="grid grid-cols-3 gap-4">
      <h2 className="text-blue-800 font-bold text-2xl">ACADÉMICO</h2>
        <label className="  ">
        <p className="text-xl font-semibold">Trabaja en clases</p>
        <p>Escribe una descripción</p>
          <input
            type="text"
            name="schoolDescription"
            value={schoolDescription}
            onChange={(e) => setschoolDescription(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </label>
        <label className="block mb-4  ">
        <p>Escribe el plan</p>
          <input
            type="text"
            name="schoolAction"
            value={schoolAction}
            onChange={(e) => setschoolAction(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>
        <label className="block mb-4 ">
        <p className="text-xl font-semibold">Trabaja en casa</p>
        <p>Escribe una descripción</p>
          <input
            type="text"
            value={behaviorDescription}
            onChange={(e) => setBehaviorDescription(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>

        <label className="block mb-4 ">
        <p>Escribe el plan</p>
          <input
            type="text"
            value={behaviorAction}
            onChange={(e) => setBehaviorAction(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>

        <label className="block mb-4 ">
        <p className="text-xl font-semibold">Trabaja en CIRÉ</p>
          <p>Escribe una descripción</p>
          <input
            type="text"
            value={relationDescription}
            onChange={(e) => setRelationDescription(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label >
        <label className="block mb-4 ">
        <p>Escribe el plan</p>
          <input
            type="text"
            value={relationACtion}
            onChange={(e) => setRelationACtion(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>
        <h2 className="text-blue-800 font-bold text-2xl">CONVIVENCIA</h2>
        <p className="text-xl font-semibold">Trabaja en Casa</p>
        <label className="block mb-4  ">
        Escribe el plan
          <input
            type="text"
            value={relationACtion}
            onChange={(e) => setRelationACtion(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>

        <label className="block mb-4  ">
        <p>Escribe una descripción</p>
          <input
            type="text"
            value={workClassDescription}
            onChange={(e) => setWorkClassDescription(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>
        <p className="text-xl font-semibold">Trabaja en Casa</p>
        <label className="block mb-4  ">
        Escribe el plan
          <input
            type="text"
            value={workClassAction}
            onChange={(e) => setWorkClassAction(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>

        <label className="block mb-4  ">
        <p>Escribe una descripción</p>
          <input
            type="text"
            value={workCireDescription}
            onChange={(e) => setWorkCireDescription(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>
        <p className="text-xl font-semibold">Trabaja en Casa</p>
        <label className="block mb-4  ">
        <p>Escribe una descripción</p>
          <input
            type="text"
            value={workHomeDescription}
            onChange={(e) => setWorkHomeDescription(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>
        <label className="block mb-4  ">
        <p>Escribe el plan</p>
          <input
            type="text"
            value={workHomeAction}
            onChange={(e) => setWorkHomeAction(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>
        <p className="text-xl font-semibold">Trabaja en Casa</p>
        <label className="block mb-4  ">
        <p>Escribe una descripción</p>
          <input
            type="text"
            value={parentDescription}
            onChange={(e) => setParentDescription(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>

        <label className="block mb-4  ">
        <p>Escribe el plan</p>
          <input
            type="text"
            value={parentAction}
            onChange={(e) => setParentAction(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>
        <p className="text-xl font-semibold">Trabaja en Casa</p>
        <label className="block mb-4 d ">
        <p>Escribe una descripción</p>
          <input
            type="text"
            value={accompanimentDescription}
            onChange={(e) => setAccompanimentDescription(e.target.value)}
            className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>
        <label className="block mb-4 ">
        <p>Escribe el plan</p>
          <input
            type="text"
            value={accompanimentAction}
            onChange={(e) => setAccompanimentAction(e.target.value)}
                        className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"

          />
        </label>

        <button className="w-full bg-green-700 h-10 font-semibold rounded-lg text-white hover:bg-green-500 " onClick={selectedInfo} type="submit">
          Guardar
        </button>
        {selectedInfo && (
          <button type="button" onClick={() => setSelectedInfo(null)}>
            Cancel
          </button>
        )}
        </div>
      </form>
    </div>
  );
}

export default AddInfo;
