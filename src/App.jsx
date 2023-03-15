import React from "react";
import { Categories } from "./pages/Categories";
import AddStudent from "./pages/CRUD Student/AddStudent";
import { ListStudents } from "./pages/CRUD Student/ListStudents";
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { EditStudent } from "./pages/CRUD Student/EditStudent";
import Navbar from "./components/organism/Navbar";
import  Pagination  from "./components/organism/FormOneFinish/Pagination";
import  Scale  from "./components/organism/FormSixFinish/Scale";




function App() {
	
	return (
		<>
		<Navbar />
		 <BrowserRouter>
		 <Routes>
			<Route path='/' element={<ListStudents/>}></Route>
			<Route path='/categories' element={<Categories/>}></Route>
			<Route path='/addstudent' element={<AddStudent/>}></Route>
			<Route path='/list5years' element={<ListStudents/>}></Route>
			<Route path="/editstudents/:id" element={<EditStudent />} exact></Route>
			<Route path="pagination5years" element={<Pagination />} exact></Route> 
			<Route path="pagination5.2years" element={<Scale />} exact></Route> 
		 </Routes>
		 </BrowserRouter>
	
		
		</>
	)
	}


export default App;
