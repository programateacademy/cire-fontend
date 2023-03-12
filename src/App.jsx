import React from "react";
import Navbar from "./components/organism/NavbarAdmin";
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import AddProfessional from "./pages/CRUD professional/AddProfessional";
import { ListProfessionals } from "./pages/CRUD professional/ListProfessionals";
import { EditProfessional } from "./pages/CRUD professional/EditProfessional";


function App() {
	

	

	return (
		<>
		 <BrowserRouter>
		 <Navbar />
		 <Routes>


			<Route path='/' element={<ListProfessionals/>}></Route>
		
			<Route path='/addprofessional' element={<AddProfessional/>}></Route>
			
			<Route path="/editprofessionals/:id" element={<EditProfessional/>} exact></Route>

		 </Routes>
		 </BrowserRouter>

		</>
	);
}

export default App;
