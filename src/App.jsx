import React from "react";
import { Categories } from "./pages/Categories";
import AddStudent from "./pages/CRUD Student 5 years/AddStudent";
import { ListStudents } from "./pages/CRUD Student 5 years/ListStudents";
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { EditStudent } from "./pages/CRUD Student 5 years/EditStudent";
import {ListStudents6Years} from "./pages/CRUD Student 6 years/ListStudents6Years"
import Navbar from "./components/organism/Navbar";
import {ListStudents7Years} from "./pages/CRUD Student 7 years/ListStudents7Years"
import {ListStudents8Years} from "./pages/CRUD Student 8 years/ListStudents8Years"
import {ListStudents9Years} from "./pages/CRUD Student 9 years/ListStudents9Years"

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
			<Route path='/list6years' element={<ListStudents6Years/>}></Route>
			<Route path='/list7years' element={<ListStudents7Years/>}></Route>
			<Route path='/list8years' element={<ListStudents8Years/>}></Route>
			<Route path='/list9years' element={<ListStudents9Years/>}></Route>
			<Route path="/editstudents/:id" element={<EditStudent />} exact></Route>	
		 </Routes>
		 </BrowserRouter>
	
		
		</>
	)
	}


export default App;
