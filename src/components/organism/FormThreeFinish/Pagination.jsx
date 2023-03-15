import React from "react";
import { useState } from "react";
import MonitoringOne from "./MonitoringOne";
import MonitoringTwo from "./MonitoringTwo";


function Pagination() {
  const [page, setPage] = useState(0);
  const [x, setX] = useState(0);
  const [formData, setFormData] = useState({
    description: "",
    descriptionOne: "",
    descriptionTwo: "",
    descriptionThree: "",
    descriptionFour: "",
    descriptionFive: "",
    descriptionSix: "",
    descriptionSeven: "",
    descriptionEight: "",
    descriptionNine: "",
    descriptionTen: "",
    descriptionEleven: "",
    descriptionTwelve: "",
    descriptionThirteen: "",
    descriptionFourteen: "",
  });

  const componentList = [
    <MonitoringOne
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <MonitoringTwo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
  ];

  return (
    <div className="App">
      <div className="progress-bar">
        {
          <div
            style={{
              width: page === 0 ? "50%" : page === 1 ? "100%" : "25%", 
            }}
          ></div>
        }
      </div>
      <div className="body">{componentList[page]}</div>
    </div>
  );
}

export default Pagination;
