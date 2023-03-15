import React from 'react'
import { useState } from 'react';
import Cognoscitivo from './Cognoscitivo';
import Psicosocial from './Psicosocial'
import Psicomotor from './Psicomotor'


function Pagination ()  {
    const [page, setPage] = useState(0);

	const [x, setX] = useState(0);
  
	
  
	const componentList = [
	  <Cognoscitivo
		formData={formData}
		setFormData={setFormData}
		page={page}
		setPage={setPage}
		x={x}
		setX={setX}
	  />,
	  <Psicosocial
		formData={formData}
		setFormData={setFormData}
		page={page}
		setPage={setPage}
		x={x}
		setX={setX}
	  />,
      <Psicomotor
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