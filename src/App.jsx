import React from "react";
import Navbar from "./components/organism/NavbarAdmin";
import { Categories } from "./pages/Categories";
import AddStudent from "./pages/CRUD Student/AddStudent";
import { ListStudents } from "./pages/CRUD Student/ListStudents";
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { EditStudent } from "./pages/CRUD Student/EditStudent";
import AddProfessional from "./pages/CRUD professional/AddProfessional";
import { ListProfessionals } from "./pages/CRUD professional/ListProfessionals";
import { EditProfessional } from "./pages/CRUD professional/EditProfessional";
import LoginAdmin from "./pages/login/LoginAdmin";
import LoginProfe from "./pages/login/LoginProfe";



function App() {

	return (
		<>
		
		 <BrowserRouter>
		 
		 <Routes>
			<Route path='/' element={<ListStudents/>}></Route>
			<Route path='/categories' element={<Categories/>}></Route>
			<Route path='/loginAdmin' element={<LoginAdmin/>}></Route>
			<Route path='/loginProfe' element={<LoginProfe/>}></Route>
			<Route path='/addstudent' element={<AddStudent/>}></Route>
			<Route path="/editstudents/:id" element={<EditStudent/>} exact></Route>
			<Route path='/list5years' element={<ListStudents/>}></Route>
			<Route path='/addprofessional' element={<AddProfessional/>}></Route>
			<Route path='/listprofessional' element={<ListProfessionals/>}></Route>
			<Route path="/editprofessional/:id" element={<EditProfessional/>} exact></Route>
			

		 </Routes>
		 
		 </BrowserRouter>

		</>
	);
}

export default App;
