import React from "react";
import { Categories } from "./pages/Categories";
import AddStudent from "./pages/CRUD Student/AddStudent";
import { ListStudents } from "./pages/CRUD Student/ListStudents";
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { EditStudent } from "./pages/CRUD Student/EditStudent";






function App() {
	

	

	return (
		<>
		 <BrowserRouter>
		 <Routes>
			<Route path='/' element={<ListStudents/>}></Route>
		
			<Route path='/addstudent' element={<AddStudent/>}></Route>

		 <Route path="/editstudents/:id" element={<EditStudent/>} exact></Route>

		 </Routes>
		 </BrowserRouter>
		</>
	);
}

export default App;
