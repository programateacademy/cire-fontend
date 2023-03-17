import React from "react";
import FormExample from "./components/organism/Forms/FormExample";
import { FormExampleV2 } from "./components/organism/Forms/FormExampleV2";
import FormStudentOne from "./components/organism/Forms/formOne/FormStudentpPartOne";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { FormStudentPartTwo } from "./components/organism/Forms/formOne/FormStudentPartTwo";
import { EditForm } from "./components/organism/Forms/EditForm";
import { FormStudentPartThree } from "./components/organism/Forms/formOne/FormStudentPartThree";
import FormValidation from "./components/template/FormValidation";
import { useState } from "react";
import Academic from "./components/organism/FormOneFinish/Academic";
import Coexistence from "./components/organism/FormOneFinish/Coexistence";
import Support from "./components/organism/FormOneFinish/Support";
// import Pagination from "./components/organism/FormFourFinish/Pagination";
// import Pagination from "./components/organism/FormThreeFinish/Pagination";
// import Pagination from "./components/organism/FormOneFinish/Pagination";
// import Pagination from "./components/organism/FormTwoFinish/Pagination";
// import Scale from './components/organism/FormSixFinish/Scale'
import FormV2 from "./components/organism/FormOneFinish/FormV2"
import { EditInfo } from "./components/organism/FormOneFinish/EditV2"
import AddInfo from "./components/organism/FormOneFinish/FormV2";
function App() {
	
	return (
		<>
		
	 <BrowserRouter>
		 <Routes>
			<Route path='/' element={<FormV2/>}></Route>
			<Route path='/addinfo' element={<AddInfo/>}></Route>
		 <Route path="/editInfo/:id" element={<EditInfo/>} exact></Route>

		 </Routes>
		 </BrowserRouter> 
		{/* <FormV2 /> */}
		
		</>
	)
	}


export default App;
