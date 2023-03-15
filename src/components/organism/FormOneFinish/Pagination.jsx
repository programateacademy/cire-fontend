import React from "react";
import { useState, useEffect, useCallback } from "react";
import Academic from "./Academic";
import Coexistence from "./Coexistence";
import Support from "./Support";

function Pagination() {
  const [formData, setFormData] = useState({});

  const handleSaveFormData = (data) => {
    setFormData(data);
  };

  const saveFormData = useCallback(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem("academicFormData", JSON.stringify(formData));
    }
  }, [formData]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("academicFormData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    saveFormData();
  }, [formData, saveFormData]);

  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);

  const componentList = [
    <Academic
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <Coexistence
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <Support
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      onSaveFormData={handleSaveFormData}
    />,
  ];

  return (
    <div className="App">
      <div className="progress-bar">
        {
          <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        }
      </div>

      <div className="body">{componentList[page]}</div>
    </div>
  );
}

export default Pagination;