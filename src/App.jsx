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
import Scale from './components/organism/FormSixFinish/Scale'
function App() {
	
	return (
		<>
		{/* <h1 className="text-green-500">Hola</h1> */}
		 {/* <FormStudentOne />  */}
		 {/* <FormValidation /> */}
		{/* <FormExample /> 
		{/* <FormExampleV2/> */}
		{/* <BrowserRouter>
		 <Routes>
			<Route path='/' element={<FormExampleV2/>}></Route>
			<Route path='/formstudentparttwo' element={<FormStudentPartTwo/>}></Route>
			<Route path='/formstudentpartthree' element={<FormStudentPartThree/>}></Route>
		 <Route path="/editForm/:id" element={<EditForm/>} exact></Route>

		 </Routes>
		 </BrowserRouter> */}
		{/* <FormExampleV2 /> */}
		{/* <Pagination /> */}
		{/* <Pagination /> */}
		{/* <Pagination /> */}
		{/* <Pagination /> */}
		<Scale />
		</>
	)
	}


export default App;
