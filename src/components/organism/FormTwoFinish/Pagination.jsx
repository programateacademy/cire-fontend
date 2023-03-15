import React from 'react'
import { useState } from 'react';
import Cire from '../FormTwoFinish/Cire'
import Family from './Family';
import School from './School';

function Pagination ()  {
    const [page, setPage] = useState(0);

	const [x, setX] = useState(0);
  
	const [formData, setFormData] = useState({
	  description:"",
        descriptionOne: "",
	  descriptionTwo: "",
      descriptionThree: "",
      descriptionFour:"",
      descriptionFive:"",
	  descriptionSix:"",
	  descriptionSeven:"",
	  descriptionEight:"",
	  descriptionNine:"",
	  descriptionTen:"",
	  descriptionEleven:"",
	  descriptionTwelve:"",
	  descriptionThirteen:"",
	  descriptionFourteen:""
	});
  
	const componentList = [
	  <Family
		formData={formData}
		setFormData={setFormData}
		page={page}
		setPage={setPage}
		x={x}
		setX={setX}
	  />,
	  <School
		formData={formData}
		setFormData={setFormData}
		page={page}
		setPage={setPage}
		x={x}
		setX={setX}
	  />,
	  <Cire
		formData={formData}
		setFormData={setFormData}
		page={page}
		setPage={setPage}
		x={x}
		setX={setX}
	  />
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


	
  )
}

export default Pagination
