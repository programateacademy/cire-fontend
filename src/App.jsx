import React from "react";
<<<<<<<<< Temporary merge branch 1
import Navbar from "./components/organism/Navbar";
=========
import { Categories } from "./pages/Categories";
import AddStudent from "./pages/CRUD Student/AddStudent";
import { ListStudents } from "./pages/CRUD Student/ListStudents";
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { EditStudent } from "./pages/CRUD Student/EditStudent";





>>>>>>>>> Temporary merge branch 2

function App() {
	

	

	return (
		<>
<<<<<<<<< Temporary merge branch 1
		<div>
			<div>
			<Navbar />
			</div>
		</div>
=========
		 <BrowserRouter>
		 <Routes>
			<Route path='/' element={<ListStudents/>}></Route>
		
			<Route path='/addstudent' element={<AddStudent/>}></Route>

		<Route path="/editstudents/:id" element={<EditStudent/>} exact></Route>

		 </Routes>
		 </BrowserRouter>
>>>>>>>>> Temporary merge branch 2
		</>
	);
}

export default App;
