import React from "react";
import Navbar from "./components/organism/NavbarAdmin";
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import AddProfessional from "./pages/CRUD professional/AddProfessional";
import { ListProfessionals } from "./pages/CRUD professional/ListProfessionals";
import { EditProfessional } from "./pages/CRUD professional/EditProfessional";
import AccountProffesional from "./pages/CRUD professional/AccountProfessional";


function App() {
	

	

	return (
		<>
		 <BrowserRouter>
		 <Routes>


			<Route path='/' element={<ListProfessionals/>}></Route>
			<Route path='/accountprofessional' element={<AccountProffesional/>}></Route>
		

		 </Routes>
		 </BrowserRouter>

		</>
	);
}

export default App;
